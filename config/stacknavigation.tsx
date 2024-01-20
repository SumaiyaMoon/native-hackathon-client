import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Home from '../screens/home';
import SignUp from '../screens/signup';
// import Profile from '../screens/profile';
// import MapScreen from '../screens/mapscreen';
// import LocalData from '../screens/localdata';
// import UploadScreen from '../screens/uploadscreen';
// import Products from '../screens/products';
// import SingleProduct from '../screens/singleproduct';
import Splash from '../screens/splash';
// import Courses from '../screens/courses';
import AppTask from '../screens/AppTask';
import CreateTask from '../screens/createTask';
import Slider from '../screens/slider';
import IntroOne from '../screens/introslider/introOne';
import IntroThree from '../screens/introslider/introThree';
import IntroTwo from '../screens/introslider/introTwo';
import AppProfile from '../screens/AppProfile';
import AppProject from '../screens/AppProject';
import AppChat from '../screens/AppChat';
import CreateProject from '../screens/createProject';
import AppTeam from '../screens/AppTeam';
import CreateTeam from '../screens/createTeam';
import AppSettings from '../screens/AppSettings';
import LabelsListScreen from '../screens/LableListScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true if the user is logged in

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., checking authentication status)
    const checkAuthStatus = async () => {
      // You can implement your authentication logic here
      // For now, just simulating a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoggedIn(true); // Set to true if the user is logged in
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  if (isLoading) {
    // Show loading screen (optional)
    return <Splash />;
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Slider"
        component={Slider}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="IntroOne"
        component={IntroOne}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="IntroTwo"
        component={IntroTwo}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="IntroThree"
        component={IntroThree}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="AppTask" component={AppTask} />
      <Stack.Screen name="AppSettings" component={AppSettings} />
      <Stack.Screen name="AppProfile" component={AppProfile} />
      <Stack.Screen name="AppProject" component={AppProject} />
      <Stack.Screen name="AppChat" component={AppChat} />
      <Stack.Screen name="AppTeam" component={AppTeam} />
      <Stack.Screen name="CreateTeam" component={CreateTeam} />
      <Stack.Screen name="CreateTask" component={CreateTask} />
      <Stack.Screen name="CreateProject" component={CreateProject} />
      <Stack.Screen name="LabelList" component={LabelsListScreen} />
      {/* <Stack.Screen name="SingleTask" component={SingleTask} /> */}
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUp}
      />

      {/* <Stack.Screen
        options={{headerShown: false}}
        name="LocalData"
        component={LocalData}
      />
      <Stack.Screen
        // options={{headerShown: false}}
        name="Courses"
        component={Courses}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Products"
        component={Products}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="UploadScreen"
        component={UploadScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="MapScreen"
        component={MapScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SingleProduct"
        component={SingleProduct}
      /> */}

      <Stack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
    </Stack.Navigator>
  );
}
