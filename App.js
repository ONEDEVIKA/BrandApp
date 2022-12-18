import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const App = () => {
  const onSelectImage = () =>{

  }
  return (
    <View>
      <TouchableOpacity style={styles.container}
      onPress={onSelectImage}>
      <Text style={styles.btnStyle}>Upload</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  btnStyle:{
backgroundColor:"blue",
height:50,
marginTop:200,
borderRadius:10,
alignItems:"center"
  }
})