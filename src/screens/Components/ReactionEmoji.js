// import React, { useState } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { AntDesign } from "@expo/vector-icons";

// const EmojiReactions = () => {
//   const [showReactions, setShowReactions] = useState(false);
//   const [selectedEmoji, setSelectedEmoji] = useState("");
//   const toggleReactions = () => {
//     setShowReactions(!showReactions);
//   };

//   const selectEmojiReaction = (emoji) => {
//     setSelectedEmoji(emoji);
//   };

//   return (
//     <View>
//       <AntDesign
//         name="plussquareo"
//         size={20}
//         color="grey"
//         onPress={toggleReactions}
//       />
//       {showReactions && (
//         <View style={{ flexDirection: "row", marginTop: 10 }}>
//           <TouchableOpacity
//             style={{ flexDirection: "row", marginTop: 5, left: 5 }}
//             onPress={selectedEmoji}
//           >
//             <Text>👍</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={selectedEmoji}
//             style={{ flexDirection: "row", marginTop: 5, left: 5 }}
//           >
//             <Text>❤️</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={selectedEmoji}
//             style={{ flexDirection: "row", marginTop: 5, left: 5 }}
//           >
//             <Text>😄</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// export default EmojiReactions;
// export default EmojiButton;

// const EmojiButton = ({ emoji, onPress }) => {
//   return (
//     <AntDesign name="plussquareo" size={20} color="grey" onPress={onPress}>
//       <Text>{emoji}</Text>
//     </AntDesign>
//   );
// };
