import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, FlatList, ScrollView, SafeAreaView  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd'
import CustomRow from '../components/CustomRow';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ListingScreen ({navigation}) {

  const [itemList, setitemList] = useState(0);

  useEffect(() => {
    readData();
  });

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('SimpsonsList');
      if (value !== null) {
        setitemList(JSON.parse(value));
      }else{
        getData()
      }
    } catch (e) {
      console.log('Error when fetching data from storage')
    }
  };

  const saveData = async (json) => {
    try {
      await AsyncStorage.setItem('SimpsonsList', JSON.stringify(json))
    } catch (e) {
      console.log('Error when saving data', e)
    }
  }

  const getData = () => {
    return fetch('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')
      .then((response) => response.json())
      .then((json) => {
        setitemList(json)
        saveData(json)
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addButtonClicked = () =>{
    navigation.navigate('AddSimpsonScreen', { name: 'Jane' })
  }

  return (
    <View style={styles.container}>
          <FlatList
            data={itemList}
            style={styles.list}
            keyExtractor={(itm) => itm.id}   
            renderItem={({ item, index }) => <CustomRow
                id={index+1}
                name={item.name}
                avatar_url={item.avatar}
                job={item.job}
                description={item.description}
                navigation = {navigation}
            />}
        />
        <TouchableOpacity style={styles.addButton} onPress={addButtonClicked}>
              <FontAwesomeIcon icon={faAdd} />
        </TouchableOpacity>
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
  highlight: {
    fontWeight: '700',
  },
  list:{
    width:'100%'
  },
  addButton:{
    alignItems:'center',
    justifyContent:'center',
    width:75,
    height:75,
    backgroundColor:'#03a1fc',
    borderRadius:50,
    marginBottom:30
  }
});

export default ListingScreen;