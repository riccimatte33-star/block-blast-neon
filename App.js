import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import GameScreen from './src/screens/GameScreen';
import ShopScreen from './src/screens/ShopScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { ThemeProvider } from './src/context/ThemeContext';
import { GameProvider } from './src/context/GameContext';
import { SoundProvider } from './src/context/SoundContext';
import TabBarIcon from './src/components/TabBarIcon';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <GameProvider>
          <SoundProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={{
                  headerShown: false,
                  tabBarStyle: {
                    backgroundColor: '#0a0e27',
                    borderTopColor: '#00ff88',
                    borderTopWidth: 2,
                  },
                  tabBarActiveTintColor: '#00ff88',
                  tabBarInactiveTintColor: '#666',
                }}
              >
                <Tab.Screen
                  name="Game"
                  component={GameScreen}
                  options={{
                    tabBarIcon: ({ focused }) => (
                      <TabBarIcon focused={focused} name="game" />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Shop"
                  component={ShopScreen}
                  options={{
                    tabBarIcon: ({ focused }) => (
                      <TabBarIcon focused={focused} name="shop" />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Settings"
                  component={SettingsScreen}
                  options={{
                    tabBarIcon: ({ focused }) => (
                      <TabBarIcon focused={focused} name="settings" />
                    ),
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </SoundProvider>
        </GameProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
