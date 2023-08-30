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

const ChatInput = () => {
  // const [isEmojiSelectorOpen, setIsEmojiSelectorOpen] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState("");
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const toggleEmojiSelector = () => {
    setShowEmojiSelector(!showEmojiSelector);
  };

  // const handleEmojiSelect = (emoji) => {
  //   setText(text + emoji);
  // };

  const emojiData = ["❤️", "👍"];

  const handleReactionSelection = (reaction) => {
    setSelectedReaction(reaction);
    setShowEmojiSelector(false);
  };

  const handleSend = () => {
    setMessages([
      ...message,
      { text: message, sender: "user", reaction: selectedReaction },
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
          top: 200,
          alighItems: "stretch",
        }}
      >
        <TextInput
          placeholder="Type your message..."
          value={message} //selectReaction
          //onChangeText={setSelectedReaction}
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
            return <ChatMessage text={item.text} sender={item.sender} />;
          }}
        />
      </View>

      <View style={{ flexDirection: "column" }}>
        {/* <TouchableOpacity onPress={handleReactionSelection}>
          //     <AntDesign name="plussquareo" size={20} color="grey" />
        //   </TouchableOpacity> */}
      </View>
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
});

export default ChatInput;

{
  /* {message?.map((message, index) => ( */
}
{
  /* <ChatMessage
    key={2}
    text={"message.text"}
    reactions={emojiData} //emojiData
    onReactionPress={handleReactionSelection}
  /> */
}
{
  /* ))} */
}

{
  /* // const newMessage = ({ message, result }) => { */
}
{
  /* // return (
//   <View>
//     <FlatList 
//     data = {message}
//     />
//   </View>
// )
  // };

  // setMessages([...messages, newMessage]);
  // setMessage(""); */
}
