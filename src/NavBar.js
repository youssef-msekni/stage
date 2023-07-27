import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/native';
import Profile from './Profile';
import Settings from './settings';
import Topic from './Topic';

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

const ScreenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#fff",
  }
};

const NavBar= () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handlePressOutsideNavbar = () => {
    setIsNavbarVisible(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutsideNavbar}>
      <View style={styles.container}>
        <NavigationContainer independent={true}>
          <Tab.Navigator screenOptions={ScreenOptions}>
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: "center", justifyContent: 'center' }}>
                    <AntDesign name="home" size={24} color={focused ? "#198EB6" : "#111"} />
                    
                  </View>
                )
              }}
            />
            <Tab.Screen
              name="Topic"
              component={Topic}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: "center", justifyContent: 'center' }}>
                    <MaterialCommunityIcons name="clock-time-three-outline" size={24} color={focused ? "#198EB6" : "#111"} />
                    
                  </View>
                )
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: "center", justifyContent: 'center' }}>
                    <FontAwesome name="stethoscope" size={24} color={focused ? "#198EB6" : "#111"} />
                    
                  </View>
                )
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:80,
    shadowColor:"grey",
    shadowOpacity:0.5,
    borderRadius:10,
  },
});

export default  NavBar;
