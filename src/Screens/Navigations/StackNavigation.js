import React, { useEffect } from "react";
import { View, Text, SafeAreaView, StatusBar, LogBox } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Theme from "../../Utils/Theme";
const Stack = createNativeStackNavigator();
//Screens Imported
import SplashScreen from "../Splash/Splash";
import LoginScreen from "../LoginScreen/LoginScreen";
import BaseScreen from "../LoginScreen/BaseScreen";
import SignupScreen from "../LoginScreen/SignupScreen";
import Settings from '../Settings/Settings';
import TermAndCondition from '../TermAndCondition/TermAndCondition';
import Support from '../Support/Support';
//Other Navigations
import BottomNavigation from './BottomNavigation'
function Navigation() {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    LogBox.ignoreLogs(["Possible Unhandled Promise Rejection"]);
    LogBox.ignoreLogs([
      "Can't perform a React state update on an unmounted component. This is a no-op",
    ]);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        {Platform.OS === 'ios' ? (
          <StatusBar barStyle="dark-content" />
        ) : (
          <StatusBar barStyle="dark-content" backgroundColor={Theme.primary} />
        )}
      </View>

      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="BaseScreen" component={BaseScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="TermAndCondition" component={TermAndCondition} />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default Navigation;
