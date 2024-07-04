import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const HomeHeader = () => {
  return (
    <View
      style={{
        display: "flex",
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 20,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        gap: 12,
        backgroundColor: "lightgreen",
      }}
    >
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          gap: 12,
        }}
      >
        <View>
          <Image
            source={require("../../assets/images/Remi_2.jpg")}
            style={{ width: 64, height: 64, borderRadius: 500 }}
          />
        </View>
        <View>
          <Text style={{ fontFamily: "montserrat-bold", fontSize: 18 }}>
            Aderemi Abiodun
          </Text>
          <Text style={{ fontFamily: "montserrat-regular", fontSize: 14 }}>
            deremidev@gmail.com
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 12,
          backgroundColor: "white",
          width: "90%",
          alignItems: "center",
          padding: 6,
          borderRadius: 24,
          marginTop: 12,
          fontFamily: "montserrat-regular",
          fontSize: 14,
        }}
      >
        <EvilIcons name="search" size={24} color="black" />

        <View
        style={
            {
                width: "100%"
            }
        }
        >
          <TextInput
            placeholder="Search..."
            multiline ={false}
            style={{
              fontFamily: "montserrat-semibold",
              fontSize: 14,
              width: "85%",
            //   backgroundColor: "red"

            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
