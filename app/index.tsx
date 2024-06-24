import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (

    <Redirect href={"./home"}   />
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: "crimson"
    //   }}
    // >
    //   <Text
    //   style={{color: "white",
    //     fontSize: 40,
    //     fontFamily: "montserrat-bold"
    //   }}
    //   >A Business Directory App For Everyone</Text>
    // </View>
  );
}
