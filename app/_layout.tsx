import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

useFonts({
  "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
  "montserrat-light": require("../assets/fonts/Montserrat-Light.ttf"),
  "montserrat-medium": require("../assets/fonts/Montserrat-Medium.ttf"),
  "montserrat-regular": require("../assets/fonts/Montserrat-Regular.ttf"),
  "montserrat-semibold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
})

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
