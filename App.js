import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/Home';
import { LoginScreen } from './screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        animation: 'flip',
      }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}