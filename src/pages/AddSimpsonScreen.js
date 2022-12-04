import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {addList} from '../../redux/actions/simpsonsActions';

const AddSimpsonScreen = ({navigation}) => {

  const [name, setName] = useState(0);
  const [job, setJob] = useState(0);
  const [description, setDescription] = useState(0);
  const [imageURL, setImageURL] = useState(0);

  const dispatch = useDispatch();
  const state = useSelector((state)=>state);

  const save =()=>{
    let saveModel = {
        name: name,
        avatar: imageURL,
        job: job,
        description: description,
        id:75
    }
    let saveModelJson = JSON.stringify(saveModel)
    dispatch(addList(saveModelJson))

    navigation.navigate('ListingScreen')
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.inputContainer}>
          <Text>Name Surname:</Text>
          <TextInput
                style={styles.inputText}
                onChangeText={(value)=>{setName(value)}}
                value={name}
                placeholder=""
            />
        </View>
        <View style={styles.inputContainer}>
          <Text>Job Title:</Text>
          <TextInput
                style={styles.inputText}
                onChangeText={(value)=>{setJob(value)}}
                value={job}
            />
        </View>
        <View style={styles.inputContainer}>
          <Text>About Him/Her:</Text>
          <TextInput
                style={[styles.inputText , {height:90}]}
                onChangeText={(value)=>{setDescription(value)}}
                value={description}
                multiline={true}
                numberOfLines={4}
            />
        </View>
        <View style={styles.inputContainer}>
          <Text>Image Link:</Text>
          <TextInput
                style={styles.inputText}
                onChangeText={(value)=>{setImageURL(value)}}
                value={imageURL}
            />
        </View>
        <View style={styles.saveButton}>
            <Button
                onPress={()=>{save()}}
                title="Add Character" 
                color="#fff"   
            />
        </View>
      </ScrollView>
    </SafeAreaView>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer:{
    marginTop:10,
    marginHorizontal:10
  },
  inputText:{
    backgroundColor:'#fff',
    borderColor:'gray',
    borderWidth: 0.5,
    borderRadius:4,
    height:40,
    paddingLeft:5
  },
  saveButton:{
    backgroundColor: '#00aeef',
    borderRadius:4,
    marginTop:20,
    marginHorizontal:10
  }
});


export default AddSimpsonScreen;