import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView> 

    <View 
    style={{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    }}
    >
      <Text 
      style={{
        fontSize: 40
      }}
      >Home
      Lorem ipsum dolor sit amet.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur harum, sunt
       doloribus vel tempora maiores eligendi numquam blanditiis fugiat error quibusdam,
        deleniti non totam nihil hic dolorum, voluptatum sed dolor commodi repellat nobis
         iusto nostrum nesciunt! Repellendus tenetur
       accusantium deleniti expedita, repudiandae sed, esse ducimus voluptatibus perferendis
        eum architecto nisi!
      </Text>
    </View>
    </SafeAreaView>

  )
}

export default Home

const styles = StyleSheet.create({})