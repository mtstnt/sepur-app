import { StackActions } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SButton } from "../components/SButton";
import { SText } from '../components/SText';

const styles = StyleSheet.create({
  input: {
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2
  }
});

export function LoginScreen({ navigation }) {

  const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });

  const submitLogin = () => {
    console.log("Submitting with email: " + loginInputs.email);
    console.log("Submitting with password: " + loginInputs.password);
    // navigation.dispatch({
    //   ...StackActions.replace("Home")
    // });
  }

  const setOnInputChange = (name) => {
    return (text) => {
      setLoginInputs({ ...loginInputs, [name]: text });
    }
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style={{
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        marginVertical: 35,
      }}>
        <SText text={"Welcome!"} fontSize={30} isBold={true} styles={{ 
            marginBottom: 10, 
            textAlign: 'center' 
          }} />

        <SText text={"Please fill in your account info so we can log you in."} fontSize={18} isBold={true} styles={{
            marginLeft: 5,
            textAlign: 'center',
          }} />
      </View>

      <TextInput onChangeText={setOnInputChange('email')} style={styles.input} placeholder="Email" />
      <TextInput onChangeText={setOnInputChange('password')} style={styles.input} secureTextEntry placeholder="Password" />

      <SButton text={"Masuk"} color={"#3399ff"} styles={{ width: '80%', marginTop: 20 }} 
        onPress={submitLogin} />
      <SButton text={"Belum mempunyai akun?"} color={"#80bfff"} styles={{ width: '80%', marginTop: 10 }} />

      <View style={{
        height: 200,
      }} />
    </View>
  )
}