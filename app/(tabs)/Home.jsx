import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/Home/HomeHeader'

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

     {/* Home Header */}

     <HomeHeader/>
      
      
     
      
    </View>


      </ScrollView>

    </SafeAreaView>

  )
}

export default Home

const styles = StyleSheet.create({})