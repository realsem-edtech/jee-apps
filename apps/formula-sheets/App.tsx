import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types';
import HomeScreen from './src/screens/HomeScreen';
import ChapterDetailScreen from './src/screens/ChapterDetailScreen';
import FormulaDetailScreen from './src/screens/FormulaDetailScreen';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#1A56DB' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '600' },
          contentStyle: { backgroundColor: '#F8FAFC' },
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
          name="Search"
          component={SearchScreen}
          options={{
            title: 'Search Formulas',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
