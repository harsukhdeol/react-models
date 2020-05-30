import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-360";
import ModelView from "./components/ModelView";
import TopPosts from "./components/TopPosts";
import CurrentPost from "./components/CurrentPost";
import * as Store from "./components/Store";
Store.initialize("AIzaSyD0dUH9iYz32jVVmQGwaGsmAWuwkeXJldA");
console.log(process.env);

/* export default class react_model_viewer extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Welcome to React 360</Text>
        </View>
      </View>
    );
  }
} */

/* const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});
 */

//AppRegistry.registerComponent("react_model_viewer", () => react_model_viewer);

AppRegistry.registerComponent("TopPosts", () => TopPosts);
AppRegistry.registerComponent("CurrentPost", () => CurrentPost);
AppRegistry.registerComponent("ModelView", () => ModelView);
