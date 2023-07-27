import React,{useState} from 'react'
import { Text,View,StyleSheet,Image,Button,Alert } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons,AntDesign,Fontisto,MaterialCommunityIcons,MaterialIcons,Entypo } from '@expo/vector-icons'; 
import EditProfile from './EditProfile';
import WelcomePage from './welcomePage';

const Settings=()=>{
    const [ShowEditProfile, setShowEditProfile] = useState(false);
    const handleEditProfilePress = () => {
        setShowEditProfile(true);
  };
  if (ShowEditProfile){
        return <EditProfile/>;
    }
    else{
     
    return(
        
            <View style={styles.container}>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={{fontSize:26,marginStart:150}}>Settings</Text>
                    <FontAwesome onPress={()=>Alert.alert('Search')} name="search" size={30} color="black" style={{ marginLeft:50 }} />
                    <Ionicons onPress={()=>Alert.alert('Notification')} name="md-notifications-outline" size={30} color="black" style={{ marginHorizontal:20 }} />
                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
                    
                   <Image style={{borderRadius:600}} source={require('../assets/user.png')}/>
                    
                </View>
                <Text style={{fontSize:24,marginTop:10}}>Username</Text>
                <Text style={{fontSize:22}}>Username@gmail.com</Text>
                <View style={{marginTop:20}}>
                    <Button 
                        title="Edit profile"
                        onPress={handleEditProfilePress}
                    />
                </View>
                <View style={{backgroundColor:'white',marginTop:20}}>
                    <Text style={{fontSize:22,marginHorizontal:140}}>Preferences :</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:15,marginEnd:200,marginBottom:10}}>
                    <Ionicons onPress={()=>Alert.alert(' ON/OFF Notification')} name="md-notifications-outline" size={30} color="black"   />
                    <Text style={{fontSize:22}}> Notifications</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:15,marginEnd:190,marginBottom:10}}>
                    <AntDesign  onPress={()=>Alert.alert('Tag')} name="tag" size={30} color="black"   />
                    <Text style={{fontSize:22}}> Manage Tags</Text>
                </View>
                 <View style={{flexDirection:'row',marginTop:15,marginEnd:210,marginBottom:10}}>
                    <Fontisto  onPress={()=>Alert.alert('Language')} name="world-o" size={30} color="black"   />
                    <Text style={{fontSize:22}}>  Languages</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:15,marginEnd:145,marginBottom:10}}>
                    <Ionicons  onPress={()=>Alert.alert('Change Password')} name="ios-lock-closed-sharp" size={30} color="black"   />
                    <Text style={{fontSize:22}}> Change Password</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:15,marginEnd:251,marginBottom:10}}>
                    <MaterialCommunityIcons  onPress={()=>Alert.alert('Logout')} name="logout" size={30} color="black"   />
                    <Text style={{fontSize:22}}> Logout</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:5,backgroundColor:'white'}}>
                    <View style={{flexDirection:'column'}}>
                        <MaterialIcons onPress={()=>Alert.alert('Topic')} name="topic" size={30} color="black" style={{ marginRight: 70 }} />
                        <Text style={{marginRight: 60,fontSize:16,marginBottom:15}}>Topics</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <FontAwesome onPress={()=>Alert.alert('Profile')} name="user" size={30} color="black" style={{ marginHorizontal: 60 }} />
                        <Text style={{ marginHorizontal: 50,fontSize:16,marginBottom:15 }}>Profile</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Entypo onPress={()=>Alert.alert('Followers')} name="users" size={30} color="black" style={{ marginLeft: 80 }} /> 
                        <Text style={{ marginLeft: 60,fontSize:16 }}> Followers</Text> 
                    </View>
                    
                       
              </View>
            </View>
            
            
        
    )
}}
const styles = StyleSheet.create({
    container:{
        
        flexDirection:'column',
        backgroundColor:'gainsboro',
        marginTop:15,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
    },
})
export default Settings