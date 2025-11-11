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
          height: '9.5%',
          paddingTop: 10,
          paddingBottom: 10,
          position: 'absolute',
          borderTopWidth: 0,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          backgroundColor: theme.colors.tabBarBackgroundColor,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 5,
          elevation: 5,
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
