import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function LoginScreen() {
  return (
    <View style={styles.main}>
      <Text>Login page</Text>
    </View>
  )
}