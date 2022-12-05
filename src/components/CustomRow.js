import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
import { useDispatch, useSelector } from 'react-redux';
import {updateList, addList} from '../../redux/actions/simpsonsActions';
import _ from 'lodash'


function CustomRow ({ id, row, name, avatar_url, job, description, navigation }) {
    const dispatch = useDispatch();
    const state = useSelector((state)=>state);

    const gotoDetails = (id, name, avatar_url, job, description, navigation) =>{
   
        navigation.navigate('SimpsonDetailScreen',  {id: id, name: name, avatar_url: avatar_url, job: job, description: description} )
    }

    const moveLower = () =>{
        var lst = _.extend([], state.simpsonsList);
        const currentRow = _.find(lst, function(o) { return o.id ==id; });
        const nextRow = _.find(lst, function(o) { return o.row == parseInt(currentRow.row) + 1; });
        if(nextRow==null){
            return;
        }
        currentRow.row = parseInt(currentRow.row) + 1
        nextRow.row = parseInt(currentRow.row) - 1
        dispatch(updateList(lst));
    }

    const moveUpper = () =>{
        var lst = _.extend([], state.simpsonsList);
        const currentRow = _.find(lst, function(o) { return o.id ==id; });
        const nextRow = _.find(lst, function(o) { return o.row == parseInt(currentRow.row) - 1; });
        if(nextRow==null){
            return;
        }
        currentRow.row = parseInt(currentRow.row) - 1
        nextRow.row = parseInt(currentRow.row) + 1
        dispatch(updateList(lst));
    }
    
    const deleteRow = () =>{
        var evens = _.filter(state.simpsonsList, function(o) { return o.id !=id; });
        const modifiedJson = evens.map((o,index) => ({
            ...o,
            row: `${index+1}`
          }));
        dispatch(updateList(modifiedJson));
    }
    
    return (
    <TouchableOpacity onPress={()=>gotoDetails(id, name, avatar_url, job, description, navigation )}>
    <View style={styles.container}>
         <Text style={styles.rowNumber}>
                {row}
        </Text>
        <Image source={{ uri: avatar_url }} style={styles.photo} resizeMode='contain' />
        <View style={styles.container_text}>
            <Text style={styles.name}>
                {name}
            </Text>         
        </View>
        <View style={styles.buttonsContainer}>
            <View style={styles.upDownButtons}>
                <TouchableOpacity style={styles.addButton} onPress={()=>moveUpper()}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </TouchableOpacity>      
            </View> 
            <View style={styles.upDownButtons}>
                <TouchableOpacity style={styles.addButton} onPress={()=>moveLower()}>
                    <FontAwesomeIcon icon={faArrowDown} />
                </TouchableOpacity>  
            </View>
            <View style={styles.upDownButtons}>
                 <TouchableOpacity style={styles.addButton} onPress={()=>deleteRow()}>
                    <FontAwesomeIcon icon={faTrash} />
                 </TouchableOpacity>  
            </View>
        </View>
    </View>
    </TouchableOpacity>
    )
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
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
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
        alignSelf: 'center',
        flexDirection:"row",
    },
    upDownButtons: {
       alignSelf: 'center',
       marginLeft:20
    }
});


export default CustomRow;