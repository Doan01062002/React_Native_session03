import { Tabs } from 'expo-router';
import { COLORS } from '../styles/GlobalStyles';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: {
          backgroundColor: COLORS.backgroundPrimary,
          borderTopColor: COLORS.borderLight,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.textWhite,
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Profile Card',
          tabBarLabel: 'Bài 1',
        }}
      />
      <Tabs.Screen
        name="lesson2"
        options={{
          title: 'Flexbox Layout',
          tabBarLabel: 'Bài 2',
        }}
      />
      <Tabs.Screen
        name="lesson3"
        options={{
          title: 'Social Post',
          tabBarLabel: 'Bài 3',
        }}
      />
      <Tabs.Screen
        name="lesson4"
        options={{
          title: 'Login Form',
          tabBarLabel: 'Bài 4',
        }}
      />
      <Tabs.Screen
        name="lesson5"
        options={{
          title: 'Platform Styles',
          tabBarLabel: 'Bài 5',
        }}
      />
      <Tabs.Screen
        name="lesson6"
        options={{
          title: 'Responsive Grid',
          tabBarLabel: 'Bài 6',
        }}
      />
      <Tabs.Screen
        name="lesson7"
        options={{
          title: 'Global Styles',
          tabBarLabel: 'Bài 7',
        }}
      />
      <Tabs.Screen
        name="lesson8"
        options={{
          title: 'News Reader',
          tabBarLabel: 'Bài 8',
        }}
      />
    </Tabs>
  );
}