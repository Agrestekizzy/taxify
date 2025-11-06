import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, Splash } from '../screens';
import { paths } from './paths';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name={paths.SIGN_IN} component={SignIn} />
        {/* <Stack.Screen name="1" component={1} />
        <Stack.Screen name="2" component={2} />
        <Stack.Screen name="3" component={3} /> */}
        {/* <Stack.Screen name="signIn" component={SignIn} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
