import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
  FlatList,
  ChatMessage,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import EmojiSelection from "./EmojiSelectorScreen";
// import EmojiReactions from "./Components/ReactionEmoji";

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
      {/* {message?.map((message, index) => ( */}
      {/* <ChatMessage
        key={2}
        text={"message.text"}
        reactions={emojiData} //emojiData
        onReactionPress={handleReactionSelection}
      /> */}
      {/* ))} */}
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          padding: 5,
          marginRight: 8,
        }}
      >
        <TextInput //style={{ flex: 1, borderWidth: 1, padding: 10 }}
          placeholder="Type your message..."
          value={message} //selectReaction
          onChangeText={setSelectedReaction}
        />
        {/* // toggleEmojiSelector */}
        <TouchableOpacity
          style={{
            paddingHorizontal: 4,
            marginLeft: 8,
          }}
          onPress={() => setShowEmojiSelector(true)}
        >
          <Entypo name="emoji-happy" size={30} color="grey" />
        </TouchableOpacity>
        <Button
          style={{
            paddingHorizontal: 4,
            paddingVertical: 4,
            flexDirection: "row",
            marginLeft: 8,
          }}
          title="Send"
          onPress={handleSend}
        />
      </View>
      <View style={{ flexDirection: "column" }}>
        {/* <TouchableOpacity onPress={handleReactionSelection}>
          <AntDesign name="plussquareo" size={20} color="grey" />
        </TouchableOpacity> */}
      </View>

      <Modal visible={showEmojiSelector} animationType="slide">
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <EmojiSelection setSelectedReaction={setSelectedReaction} />
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

export default ChatInput;

// export default ChatInput;

// const TextInputScreen = () => {
//   const [message, setMessage] = useState("");
//   const [showEmojiSelector, setShowEmojiSelector] = useState(false);

//   const handleEmojiSelect = (emoji) => {
//     setMessage(message + emoji);
//   };

//   return (
//     //view ul principal cu ecranul principal
//     <View>
//       <TextInput
//         style={styles.textInput}
//         value={message}
//         onChangeText={(text) => setMessage(text)}
//         placeholder="Type your message..."
//         multiline
//       />
//       <EmojiReactions style={styles.reaction} />
//       <TouchableOpacity
//         // size={20}
//         onPress={() => setShowEmojiSelector(!showEmojiSelector)}
//       ></TouchableOpacity>
//       <View
//         style={{
//           height: 300,
//           left: 10,
//           right: 10,
//           justifyContent: "center",
//         }}
//       >
//         <EmojiSelector onEmojiSelected={(emoji) => handleEmojiSelect(emoji)} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   textInput: {
//     alignItems: "center",
//     borderWidth: 3,
//     borderColor: "grey",
//     justifyContent: "center",
//   },
//   reaction: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   input: {
//     borderColor: "gray",
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 10,
//   },
//   reactionEmoji: {
//     flexDirection: "row",
//     marginTop: 10,
//   },
//   emojiContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
// });

// export default TextInputScreen;
// export default reaction;
