import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, FlatList, ScrollView, SafeAreaView  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd'
import CustomRow from '../components/CustomRow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import {updateList, addList} from '../../redux/actions/simpsonsActions';
import _ from 'lodash'

function ListingScreen ({navigation}) {

  const [itemList, setitemList] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state)=>state);

  useEffect(() => {
    if(itemList == [] || itemList == null){
      readData();
    }
    if(JSON.stringify(itemList) !== JSON.stringify(state.simpsonsList)){
      setitemList(state.simpsonsList);
      saveData(state.simpsonsList)
    }
  });

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem('SimpsonsList');
      if (value !== null) {
        let valueJSON = JSON.parse(value)
        dispatch(updateList(valueJSON))
        setitemList(valueJSON);
      }else{
        getData()
      }
    } catch (e) {
      console.log('Error when fetching data from storage', e)
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
        const modifiedJson = json.map((o,index) => ({
          ...o,
          row: `${index+1}`
        }));
        dispatch(updateList(modifiedJson))
        setitemList(modifiedJson)
        saveData(modifiedJson)
        return modifiedJson;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addButtonClicked = () =>{
    navigation.navigate('AddSimpsonScreen', { navigation: navigation})
  }

  return (
    <View style={styles.container}>
          <FlatList
            data={_.orderBy(state.simpsonsList, ['row'], ['asc'])}
            style={styles.list}
            keyExtractor={(itm) => itm.id}   
            renderItem={({ item }) => <CustomRow
                id={item.id}
                row={item.row}
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