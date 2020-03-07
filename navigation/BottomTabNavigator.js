import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native'
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
// import PaymentScreen from '../screens/PaymentScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const HeaderSection = ()=>{
  return(
    <View>
      <Text style={{fontSize: 50}}>hello</Text>
    </View>
  )
}

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" />,
        }}
      />
      <BottomTab.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          title: 'Checkout',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-cart" />,
        }}
      />
      {/* <BottomTab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          title: "Payment",
          tabBarIcon: ({ focused })=> <TabBarIcon focused={focused} name="ios-cart" />,
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return <HeaderSection/>;
    case 'Checkout':
      return 'CheckOut Section';
  }
}
