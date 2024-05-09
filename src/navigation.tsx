import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostList from './screens/postList';
import Post from './screens/individualPost';
import Person from './screens/individualUser';


type RootStackParamList = {
  Home: undefined;
  Profile: { postId:number, userId:number, body:string  };
  Feed: { email: string,name:string } | undefined;
};


const Stack = createNativeStackNavigator();
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PostList" component={PostList} />
        <Stack.Screen name="Post" component={Post}/>
        <Stack.Screen name="Person" component={Person} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;