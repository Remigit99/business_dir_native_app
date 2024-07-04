import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeHeader = () => {
  return (
    <View style={{
        display: "flex",
        flexDirection: "row",
        gap: 18
      }}>
        <View>
          <Image source={require("../../assets/images/Remi_2.jpg")}
          style={{width: 60, height:60, borderRadius: "50%"}}
          />
        </View>
        <View>
          <Text>Aderemi Abiodun</Text>
          <Text>deremidev@gmail.com</Text>
        </View>

      </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({})