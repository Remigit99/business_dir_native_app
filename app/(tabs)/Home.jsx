import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView> 

      <ScrollView>

        
    <View 
    style={{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 32,
        paddingHorizontal: 8
    }}
    >

      <View style={{
        display: "flex",
        flexDirection: "row",
        gap: 18
      }}>
        <View>
          <Image source={require("../../assets/images/Remi_2.jpg")}
          width={48}
          height={48}
          borderRadius={100}
          />
        </View>
        <View></View>
      </View>
      <Text 
      style={{
        fontSize: 16
      }}
      >Home
      Lorem ipsum dolor sit amet.
     
      </Text>
    </View>


      </ScrollView>

    </SafeAreaView>

  )
}

export default Home

const styles = StyleSheet.create({})