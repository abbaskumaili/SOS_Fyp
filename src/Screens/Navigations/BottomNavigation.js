import * as React from 'react';
import Theme from '../../Utils/Theme';
import Entypo from 'react-native-vector-icons/Entypo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AntDesign, MaterialIcons} from '../../Utils/Exports';
import Home from '../Home/Home';
import Categories from '../Categories/Categories';
import Cart from '../Cart/Cart';
import Settings from '../Settings/Settings';
import Recepies from '../Recepies/Recepies';
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      // activeColor={Theme.primary}
      // barStyle={{backgroundColor: Theme.white}}
      // tabBarLabel={{fontSize: Theme.txtSmallest, color: 'red'}}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <AntDesign name="home" color={Theme.black} size={Theme.iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({color}) => (
            <Entypo name="folder" color={color} size={Theme.iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: () => (
            <AntDesign
              name="shoppingcart"
              color={Theme.black}
              size={Theme.iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Recepies"
        component={Recepies}
        options={{
          tabBarLabel: 'Recepies',
          tabBarIcon: ({color}) => (
            <Entypo name="add-to-list" color={color} size={Theme.iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => (
            <AntDesign
              name="setting"
              color={Theme.black}
              size={Theme.iconSize}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;
