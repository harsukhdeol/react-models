import * as React from "react";

//create redux like store to sync all elements

const State = {
  posts: undefined,
  current: -1,
};
const listeners = new Set(); //whats a set

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

const POLY_PATH = "https://poly.googleapis.com/v1/assets?";

export function initialize(apiKey) {
  //fetch top 5 posts from google poly
  const options = {
    curated: true,
    format: "GLTF2",
    key: apiKey,
    pageSize: 5,
  };
  const queryString = Object.keys(options)
    .map((k) => `${k}=${options[k]}`)
    .join("&");

  fetch(POLY_PATH + queryString)
    .then((response) => response.json())
    .then((body) => {
      const entries = body.assets.map((asset) => {
        const objSource = asset.formats.filter(
          (format) => format.formatType === "GLTF2"
        )[0];
        return {
          id: asset.name,
          name: asset.displayName,
          author: asset.authorName,
          description: asset.description,
          source: objSource,
          preview: asset.thumbnail.url,
        };
      });
      State.posts = entries;
      updateComponents();
    });
}

export function setCurrent(value) {
  State.current = value;
  updateComponents();
}
export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      posts: State.posts,
      current: State.current,
    };
    _listener = () => {
      this.setState({
        posts: State.posts,
        current: State.current,
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    componentWillUnmount() {
      listeners.delete(this._listener);
    }

    render() {
      return (
        <Component
          {...this.props}
          posts={this.state.posts}
          current={this.state.current}
        />
      );
    }
  };
}
