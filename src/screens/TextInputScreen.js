import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import EmojiSelection from "./EmojiSelectorScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import ChatMessage from "./Components/NewMessages";
import EmojiPopup from "./Components/EmojiPopup";

const ChatInput = () => {
  const [selectedReaction, setSelectedReaction] = useState(null); //the reaction emoji
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const toggleEmojiSelector = () => {
    setShowEmojiSelector(!showEmojiSelector);
  };

  const toggleEmojiPopup = (selectedMessage) => {
    setSelectedMessage(selectedMessage);
    setSelectedReaction(!selectedReaction);
  };

  const handleSend = () => {
    setMessages([
      ...messages,
      { text: message, sender: "user" }, //, reaction: handleReactionSelection }
    ]);
    setMessage(""), setSelectedReaction("");

    if (message.trim() === "") {
      return;
    }
  };
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          padding: 7,
          marginRight: 8,
          borderRadius: 10,
          top: 400,
          alighItems: "stretch",
        }}
      >
        <TextInput
          placeholder="Type your message..."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity
          style={{
            paddingHorizontal: 10,
            marginLeft: 20,
          }}
          onPress={() => setShowEmojiSelector(true)}
        >
          <Entypo name="emoji-happy" size={30} color="grey" />
        </TouchableOpacity>
        <Button
          style={{
            borderRadius: 20,
          }}
          title="Send"
          onPress={handleSend}
        ></Button>
      </View>
      <View>
        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => toggleEmojiPopup(item)}>
                <Text style={styles.messages}>
                  <View>
                    <ChatMessage
                      text={item.text}
                      sender={item.sender}
                      reaction={item.reaction}
                    />
                  </View>
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        {selectedMessage ? (
          <EmojiPopup
            style={styles.popup}
            visible={selectedReaction}
            onClose={() => setSelectedReaction(false)}
            selectedMessage={selectedMessage}
          />
        ) : null}
      </View>

      <View style={{ flexDirection: "column" }}></View>
      <Modal visible={showEmojiSelector} animationType="slide">
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <EmojiSelection message={message} setMessage={setMessage} />
          <TouchableOpacity
            style={{ height: 100 }}
            onPress={toggleEmojiSelector}
          >
            <EvilIcons name="close-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 8,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  sendButtonText: {
    marginLeft: 8,
  },
  messages: {
    marginVertical: 4,
  },
  popup: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default ChatInput;
