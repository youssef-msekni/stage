import React,{useState} from 'react'
import { Text, View, StyleSheet, Button,Alert,Image,ScrollView,TextInput } from 'react-native';
import { Ionicons,FontAwesome,Feather  } from '@expo/vector-icons'; 
import Settings from './settings';
const EditProfile = () => {
    
     const [ShowSettings, setShowSettings] = useState(false);
   const handleSettingsPress = () => {
        setShowSettings(true);
  };
  if (ShowSettings){
        return <Settings/>;
    }
    else{
    return(

      <ScrollView style={styles.container}>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Ionicons onPress={handleSettingsPress} name="chevron-back" size={30} color="black" style={{marginTop:3}} />
                    <Text style={{fontSize:26,marginStart:110}}>Edit Profile</Text>
                    <FontAwesome onPress={()=>Alert.alert('Search')} name="search" size={30} color="black" style={{ marginLeft:70 }} />
                    <Ionicons onPress={()=>Alert.alert('Notification')} name="md-notifications-outline" size={30} color="black" style={{ marginHorizontal:10 }} />
                </View>
                <View style={{flexDirection:'row',marginTop:10,justifyContent:'center',alignItems:'center'}}>
                    
                   <Image style={{borderRadius:600}} source={require('../assets/user.png')}/>
                    
                </View>
                <View style={{marginTop:20}}>
                     <Text style={{fontSize:24}}> Username</Text>
                </View>
                <View>
                    <TextInput
                        style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 0,
                        borderBottomWidth:2,
                        width:400,
                        padding:10,
                        marginTop:10,
                        backgroundColor:'white',
                        }}
                        placeholder='Username'
                    />
                </View>
                <View style={{marginTop:20}}>
                     <Text style={{fontSize:24}}> Email</Text>
                </View>
                <View>
                    <TextInput
                        style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 0,
                        borderBottomWidth:2,
                        width:400,
                        padding:10,
                        marginTop:10,
                        backgroundColor:'white',
                        }}
                        placeholder='youssef123@gmail.com'
                    />
                </View>
                <View style={{marginTop:20}}>
                     <Text style={{fontSize:24}}> Birthday</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>     </Text>
                    <TextInput
                        style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 0,
                        borderBottomWidth:2,
                        width:100,
                        padding:10,
                        marginTop:10,
                        backgroundColor:'white',
                        }}
                        placeholder='Year'
                    />
                    <Text>            </Text>
                    <TextInput
                        style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 0,
                        borderBottomWidth:2,
                        width:100,
                        padding:10,
                        marginTop:10,
                        backgroundColor:'white',
                        }}
                        placeholder='Month'
                    />
                    <Text>            </Text>
                    <TextInput
                        style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 0,
                        borderBottomWidth:2,
                        width:100,
                        padding:10,
                        marginTop:10,
                        backgroundColor:'white',
                        }}
                        placeholder='Year'
                    />
                </View>
                <View style={{marginTop:25,justifyContent: 'center',}}>
                    <Button
                      color={'green'}
                      title="Photo Library"
                      onPress={() => Alert.alert('Open Gallery')}
                    />
                </View>
                <View style={{marginTop:5,justifyContent: 'center',}}>
                    <Button
                      color={'green'}
                      title="Take Photo"
                      onPress={() => Alert.alert('Open Camera')}
                    />
                </View>
                <View style={{marginTop:5,justifyContent: 'center',}}>
                    <Button
                      color={'green'}
                      title="Cancel"
                      onPress={() => Alert.alert('return to profile page')}
                    />
                </View>
                
        </ScrollView>
    )
}}
const styles = StyleSheet.create({
  container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'gainsboro',
        marginTop:20,
    },
    verticleLine:{
        height: '100%',
        width: 1,
        backgroundColor: 'black',
  },
})

export default EditProfile