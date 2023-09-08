import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatMessage = ({ text, sender }) => {
  return (
    <View
      style={
        sender === "user"
          ? styles.userMessageContainer
          : styles.messageContainer
      }
    >
      <Text
        style={sender === "user" ? styles.userMessageText : styles.messageText}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#e5e5e5",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 4,
    maxWidth: "80%",
  },
  userMessageContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 4,
    maxWidth: "80%",
  },
  messageText: {
    color: "#333",
  },
  userMessageText: {
    color: "#fff",
  },
});

export default ChatMessage;
