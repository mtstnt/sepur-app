import { Text } from "react-native";


export function SText({ text, fontSize, textAlign, isBold = false, fontColor = '#000' }) {
  return (
    <Text style={{
      fontSize: fontSize,
      fontWeight: isBold ? "bold" : "normal",
      color: fontColor,
      textAlign: textAlign,
    }}>{text}</Text>
  )
} 