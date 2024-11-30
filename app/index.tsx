import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutPage from '@/components/ui/aboutPage';
const Stack = createStackNavigator();

// App Component
const App = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AboutPage}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
  );
};

export default App;
