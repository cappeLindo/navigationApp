import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import { HomePage } from '../screens/home';
import { ProfilePage } from '../screens/Profile';
import { ProjectsPage } from '../screens/projects';
import { ContactsPage } from '../screens/contacts';
import { theme } from '../Theme/Theme';

const Tab = createBottomTabNavigator();
const iconSize = 28;

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.tabBarActiveColor,
        tabBarInactiveTintColor: theme.colors.tabBarInactiveColor,
        tabBarActiveBackgroundColor: theme.colors.tabBarBackgroundColor,
        tabBarInactiveBackgroundColor: theme.colors.tabBarBackgroundColor,
        tabBarStyle: {
          height: 85,
          elevation: 10,
          paddingTop: 10,
          shadowOpacity: 1,
          shadowRadius: 15,
          paddingBottom: 10,
          borderTopWidth: 0,
          position: 'absolute',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          shadowColor: "#ffffff",
          shadowOffset: { width: 0, height: 12 },
          backgroundColor: theme.colors.tabBarBackgroundColor,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Projects"
        component={ProjectsPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="code" color={color} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="mail" color={color} size={iconSize} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
