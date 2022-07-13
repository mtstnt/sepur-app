import { Text, TouchableOpacity } from "react-native";

export function SButton({ text, color = null, styles = {}, onPress = () => {} }) {
  return (
    <TouchableOpacity style={{
        paddingVertical: 15,
        backgroundColor: !color ? '#3399ff' : color,
        borderRadius: 10,
        elevation: 5,
        ...styles
      }}
      onPress={onPress}
    >
      <Text style={{
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white',
      }}>{text}</Text>
    </TouchableOpacity>
  )
}