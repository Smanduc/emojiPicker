import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import EmojiSelector from "react-native-emoji-selector";

const EmojiSelection = () => {
  const [text, setText] = useState("");
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);

  const handleEmojiSelect = (emoji) => {
    setText(text + emoji);
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10 }}
        placeholder="Type something..."
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <TouchableOpacity
        style={{ alignSelf: "flex-end", margin: 10 }}
        onPress={() => setShowEmojiSelector(true)}
      >
        <Text>Open Emoji Selector</Text>
      </TouchableOpacity>
      {showEmojiSelector && (
        <EmojiSelector
          onEmojiSelected={handleEmojiSelect}
          showTabs={false}
          showSearchBar={false}
          showHistory={false}
          showSectionTitles={false}
          columns={8}
          placeholder="Search emojis..."
        />
      )}
    </View>
  );
};

export default EmojiSelection;

// const EmojiSelector = ({ onEmojiSelected }) => {
//   return (
//     <View>
//       <EmojiSelector onEmojiSelected={onEmojiSelected} />
//     </View>
//   );
// };

// export default EmojiSelector;
