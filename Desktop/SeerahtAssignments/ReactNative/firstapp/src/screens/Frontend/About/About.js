import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';


export default function About() {
  return (

      <View style={[styles.flexContainer ,{paddingVertical:40}]}>
        <Text style={styles.h1}>About</Text>
        <Image style={styles.img} source={require("./../../../asset/logo.png")} />
        <Button title='Press me' color="#7400b8" onPress={() => { alert("It's Working") }} />
        <Text style={styles.our}>My Created Button</Text>
        <TouchableOpacity
          style={styles.click}
          activeOpacity={0.5}
        >
          <Text style={styles.buttonText} onPress={() => { alert("Our Created Button Is Working.") }}>Click Me</Text>
        </TouchableOpacity>


      </View>
    



  )
}

const styles = StyleSheet.create({
  flexContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1

  },
  h1: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    color: "#02c39a",
    marginBottom: 17
  },
  img: {
    width: 200,
    height: 200,
    marginBottom: 25
  },
  our: {
    color: "#d81159",
    fontSize: 20,
    fontWeight:"bold",
    marginTop: 15
  },
  click: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "orange",
    marginTop: 15,
    borderRadius: 5,
  },
  buttonText:{
    color:"#fefee3"
  }
})