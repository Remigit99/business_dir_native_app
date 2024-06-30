// import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
// import Entypo from '@expo/vector-icons/Entypo';
// import * as Font from 'expo-font';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';


// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  // const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Pre-load fonts, make any API calls you need to do here
  //       await Font.loadAsync(Entypo.font);
  //       // Artificially delay for two seconds to simulate a slow loading
  //       // experience. Please remove this if you copy and paste the code!
  //       await new Promise(resolve => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }





useFonts({
  "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
  "montserrat-light": require("../assets/fonts/Montserrat-Light.ttf"),
  "montserrat-medium": require("../assets/fonts/Montserrat-Medium.ttf"),
  "montserrat-regular": require("../assets/fonts/Montserrat-Regular.ttf"),
  "montserrat-semibold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
})

  return (
    <Stack
    screenOptions={{headerShown: false}}
    >
      <Stack.Screen
      // options={{headerShown: false}}
      name="(tabs)" />
    </Stack>

  //   <View
  //     style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
  //     onLayout={onLayoutRootView}>
  //     <Text>SplashScreen Demo! 👋</Text>
  //     <Entypo name="rocket" size={30} />
  //   </View>
  );
}
