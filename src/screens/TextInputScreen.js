import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  ChatMessage,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
// import EmojiSelector from "./EmojiSelectorScreen";
import EmojiReactions from "./Components/ReactionEmoji";

const ChatInput = () => {
  const [isEmojiSelectorOpen, setIsEmojiSelectorOpen] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState("");
  const [messages, setMessages] = useState([]);

  const toggleEmojiSelector = () => {
    setIsEmojiSelectorOpen(!isEmojiSelectorOpen);
  };

  const handleReactionSelection = (reaction) => {
    setSelectedReaction(reaction);
    setIsEmojiSelectorOpen(false);
  };

  const handleSend = () => {
    setMessages([...messages, { selectedReaction }]);
    setSelectedReaction("");
  };

  const emojiData = ["😄", "❤️", "👍", "😊", "🎉"];

  return (
    <View>
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          text={message.text}
          reactions={emojiData}
          onReactionPress={handleReactionSelection}
        />
      ))}
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Type your message..."
          value={selectedReaction}
          onChangeText={setSelectedReaction}
        />

        <TouchableOpacity onPress={toggleEmojiSelector}>
          <Entypo name="emoji-happy" size={15} color="grey" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "column" }}>
        <TouchableOpacity onPress={handleSend}>
          <AntDesign name="plussquareo" size={20} color="grey" />
        </TouchableOpacity>
      </View>

      <Modal visible={isEmojiSelectorOpen} animationType="slide">
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <FlatList
            data={emojiData}
            numColumns={5}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleReactionSelection(item)}>
                <Text style={{ fontSize: 18 }}>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={toggleEmojiSelector}>
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
