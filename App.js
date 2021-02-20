// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import crown from './assets/crown3.png';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'

export default function App() {

  const[selectedImage, setSelectedImage]= useState(null)


let openImagePickerAsync= async () => {
 let permissionResult= await ImagePicker.requestMediaLibraryPermissionsAsync()
 if (permissionResult.granted === false){
   alert('Permission to camera is required');
   return;
 }
 const pickerResult = await ImagePicker.launchImageLibraryAsync()
 
 if (pickerResult.cancelled === true){
   return;
 }

 setSelectedImage({localUri: pickerResult.uri})

}

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress= {openImagePickerAsync}
      >
      <Image 
      source={selectedImage !== null ? {uri: selectedImage.localUri} : crown}
      style={styles.image}
       >
      </Image>
      </TouchableOpacity>
      <Text style={styles.title}> Pick an image!</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={()=>(console.log('Hello'))}
      >
        <Text style={styles.buttonText}>
          Select
        </Text>
      </TouchableOpacity>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: 30, color: '#fff'},
  image: {height:180, width: 180},
  button:{
    backgroundColor:'#590101',
    marginTop: 10,
    padding: 7,
    borderRadius: 50,
    height:40,
    width:90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff', 
    fontSize: 20,
  }
});
