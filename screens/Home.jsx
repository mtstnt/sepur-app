import { ImageBackground, SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { SText } from "../components/SText";
import { to } from "../utils";

const menuList = [
  { name: "Beli Tiket", target: "Login" },
  { name: "Riwayat Pembelian", target: "Login" },
  { name: "Lihat Tiket", target: "Login" },
];

export function HomeScreen({ navigation }) {

  const menus = menuList.map((menuItem, idx) => { 
    return {
      ...menuItem, id: idx + 1 
    };
  });

  return (
    <SafeAreaView style={{
      flexDirection: 'column',
    }}>
      <ImageBackground resizeMode="cover" style={{
        opacity: 0.8,
        borderRadius: 10,
      }} source={ require('../assets/cover.jpg') }>
        <View style={{
          height: 200,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          paddingHorizontal: 20,
          borderRadius: 10,
        }}>
          <SText text="Welcome to Sepur!" fontSize={25} isBold={true} fontColor={'#fff'} />
        </View>
      </ImageBackground>
      <View style={{
        paddingHorizontal: 20,
        flexDirection: 'column',
      }}>
        <TextInput 
        placeholder="Search" 
        onSubmitEditing={() => console.log("Hello world")}
        style={{
          width: '100%',
          padding: 15,
          elevation: 3,
          borderRadius: 10,
          marginTop: -35,
          backgroundColor: 'white',
          zIndex: 999,
        }} />
      </View>
      <View style={{
        paddingHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
        {menus.map(item => {
          return (
            <TouchableOpacity style={{
              width: '30%',
              height: 110,
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#fff',
              marginVertical: 5,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 3,
            }}
              key={item.id}
              onPress={() => to(navigation, "Login")}>
              <SText textAlign={"center"} text={item.name} key={item.id} fontSize={14} />
            </TouchableOpacity>
          )
        })}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}