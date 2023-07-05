import React from 'react'
import { Text, View, StyleSheet, Button,Alert,TextInput } from 'react-native';
import { Ionicons,FontAwesome,Feather  } from '@expo/vector-icons'; 
const Reply = () => {
    return(
            <View style={styles.container}>
                <View style={{flexDirection:'row',marginTop:10,marginLeft:5}}>
                    <Ionicons onPress={()=>Alert.alert('go back to Topic page')} name="chevron-back" size={30} color="black" style={{marginTop:5}} />
                    <Text style={{fontSize:30,marginStart:130,fontWeight: 'bold',fontStyle: 'italic',letterSpacing: 0.5}}>Reply</Text>
                    <Ionicons onPress={()=>Alert.alert('Notification')} name="md-notifications-outline" size={30} color="black" style={{ marginStart:120,marginTop:5 }} />
                </View>
                <View style={{marginTop:20,flexDirection:'row'}}>
                    <Text style={{fontSize:24}}>  Reply :                                           </Text>
                    <Button
                        title="Reply"
                        color='green'
                        onPress={() => Alert.alert('save reply')}
                        />
                </View>
                <View style={{backgroundColor:'whitesmoke',marginTop:20}}>
                    <TextInput
                        style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 0,
                        borderBottomWidth:2,
                        width:500,
                        padding:10,
                        marginTop:15,
                        }}
                        placeholder='Write Title'
                    />
                </View>
            </View>
    )
}


const styles = StyleSheet.create({
  container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'gainsboro',
        marginTop:20,
    },
})

export default Reply