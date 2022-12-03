import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, ScrollView, SafeAreaView, Image } from 'react-native';
import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';

function SimpsonDetailScreen ({ route }) {
    
  const [count, setCount] = useState(0);

  const { id, name, avatar_url, job, description, navigation} = route.params;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Image source={{ uri: avatar_url }} style={styles.photo} resizeMode='contain' />
        <Text style={styles.name}>{name}</Text> 
        <Text style={styles.job}>{job}</Text>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name:{
    alignSelf:'center',
    fontSize:28,
    fontWeight:'500'
  },
  job:{
    alignSelf:'center',
    fontSize:18,
    fontWeight:'200',
    marginTop:5
  },
  description:{
    fontSize:14,
    fontWeight:'100',
    marginTop:30,
    marginHorizontal:30
  },
  photo: {
    height: 300,
    width: 0,
    marginTop:20,
    marginLeft:10,
    justifyContent:'center',
    alignSelf:'center',
    aspectRatio: 1
  },
});


export default SimpsonDetailScreen;