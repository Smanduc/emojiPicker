import React, { useState, useEffect } from "react";
import { View, Modal, TouchableOpacity, Text } from "react-native";

const EmojiPopup = ({ visible, onClose, selectedMessage }) => {
  const [selectedReaction, setSelectedReaction] = useState(""); //the reaction emoji
  const [message, setMessage] = useState("");

  const emojiData = ["😄", "😍", "👍", "❤️", "🔥", "😂", "😊", "🎉"];

  const handleEmojiSelect = (emoji) => {
    setSelectedReaction(emoji);
    // selectedReaction("");
    onClose();
  };

  useEffect(() => {
    if (!selectedMessage) {
      return;
    }
  }, []);

  return (
    <Modal visible={visible} transparent>
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
          left: 60,
        }}
      >
        <View
          style={{
            backgroundColor: "transparent",
            padding: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, marginBottom: 10 }}></Text>
          <View style={{ flexDirection: "row" }}>
            {emojiData.map((emoji) => (
              <TouchableOpacity
                key={emoji}
                onPress={() => handleEmojiSelect(emoji)}
              >
                <Text style={{ fontSize: 24 }}>{emoji}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* {message ? ( */}
          <View {...(selectedReaction && <Text>{selectedReaction}</Text>)} />
          {/* ) : null} */}
        </View>
      </View>
    </Modal>
  );
};

export default EmojiPopup;
