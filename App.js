import React from "react";
import { StyleSheet, Text, View } from "react-native";

const db = require("./aFile.db"); // not working: Unable to resolve "./aFile.db" from "App.js"
// const examplePNG = require("./assets/icon.png"); // working

/**
 *  If i would like to work with the .db file, i have to rename it
 *  to .png | .jpg | .mp4
 *  and copy it to another directory and also rename it back to .db
 *
 **/

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
