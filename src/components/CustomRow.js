import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'


const CustomRow = ({ id, name, avatar_url, navigation }) => (
    <TouchableOpacity onPress={()=>gotoDetails(navigation)}>
    <View style={styles.container}>
         <Text style={styles.rowNumber}>
                {id}
        </Text>
        <Image source={{ uri: avatar_url }} style={styles.photo} resizeMode='contain' />
        <View style={styles.container_text}>
            <Text style={styles.name}>
                {name}
            </Text>         
        </View>
        <View style={styles.buttonsContainer}>
            <View style={styles.upDownButtons}>
                <TouchableOpacity style={styles.addButton} onPress={()=>changeRowNumber(1)}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </TouchableOpacity>      
            </View> 
            <View style={styles.upDownButtons}>
                <TouchableOpacity style={styles.addButton} onPress={()=>changeRowNumber(0)}>
                    <FontAwesomeIcon icon={faArrowDown} />
                </TouchableOpacity>  
            </View>
            <View style={styles.upDownButtons}>
                 <TouchableOpacity style={styles.addButton} onPress={deleteRow}>
                    <FontAwesomeIcon icon={faTrash} />
                 </TouchableOpacity>  
            </View>
        </View>
    </View>
    </TouchableOpacity>
);
const gotoDetails = (navigation) =>{
    navigation.navigate('SimpsonDetailScreen', { name: 'Jane' })
}

const changeRowNumber = (num) =>{
  console.log(num)
}

const deleteRow = () =>{

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
      //  flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
      //  borderColor:'red',
       // borderWidth:1,
        flex:1
    },
    rowNumber:{
        flexDirection: 'column',
        alignSelf:"center",
        justifyContent: 'center',
        fontSize: 16,
        color: '#000'
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
        marginLeft:10,
        aspectRatio: 1
    },
    buttonsContainer: {
       // borderColor:'green',
       // borderWidth:1,
        alignSelf: 'center',
        flexDirection:"row",
        //right:20,
        //position:'absolute',
        //flex:1
    },
    upDownButtons: {
      //  borderColor:'green',
      //  borderWidth:1,
       alignSelf: 'center',
       marginLeft:20
    }
});


export default CustomRow;