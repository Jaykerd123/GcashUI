import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeTabs from './screens/HomeTabs';
import SendScreen from './screens/SendScreen';
import ViewAllScreen from './screens/ViewAllScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="MainTabs" component={HomeTabs} />
          <Stack.Screen name="Send" component={SendScreen} />
          <Stack.Screen name="ViewAll" component={ViewAllScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}