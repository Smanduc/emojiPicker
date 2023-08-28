import React from "react";
import { View, StyleSheet } from "react-native";
// import TextInputScreen from "./src/screens/TextInputScreen";
import ChatInput from "./src/screens/TextInputScreen";

const App = () => {
  return (
    <View
      style={{
        flex: 2,
        justifyContent: "center",
        flexDirection: "column",
        alignSelf: "center",
      }}
    >
      <ChatInput></ChatInput>
    </View>
  );
};

// const styles = StyleSheet.create({});

export default App;
