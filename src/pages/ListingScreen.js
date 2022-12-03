import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, FlatList, ScrollView, SafeAreaView  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd'
import CustomRow from '../components/CustomRow';

function ListingScreen ({navigation}) {

  const [itemList, setitemList] = useState(0);

  useEffect(() => {
   getData();
  });

  const getData = () => {
    return fetch('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')
      .then((response) => response.json())
      .then((json) => {
        setitemList(json)
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
            keyExtractor={(itm) => itm.id.toString()}   
            renderItem={({ item, index }) => <CustomRow
                id={index+1}
                name={item.name}
                avatar_url={item.avatar}
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