import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types';
import { ThemeProvider, useTheme } from './src/utils/ThemeContext';
import HomeScreen from './src/screens/HomeScreen';
import ChapterDetailScreen from './src/screens/ChapterDetailScreen';
import FormulaDetailScreen from './src/screens/FormulaDetailScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  const { colors, isDark } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '600' },
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChapterDetail"
          component={ChapterDetailScreen}
          options={({ route }) => ({
            title: route.params.chapterName,
          })}
        />
        <Stack.Screen
          name="FormulaDetail"
          component={FormulaDetailScreen}
          options={{
            title: 'Formula',
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Settings',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
