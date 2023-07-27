import React,{useState} from 'react'
import { Text,View,StyleSheet,Image,Button,Alert } from 'react-native'
import { FontAwesome,Ionicons,Entypo } from '@expo/vector-icons'
import SignUp from './SignUp'
import Login from './Login'

const WelcomePage=()=>{

    const [ShowSignUp, setShowSignUp] = useState(false);
    const handleSignUpPress = () => {
        setShowSignUp(true);
  };
  const [ShowLogin, setShowLogin] = useState(false);
    const handleLoginPress = () => {
        setShowLogin(true);
  };

    if (ShowSignUp){
        return <SignUp/>;
    }
    else if (ShowLogin){
        return <Login/>;
    }
    else {
    return(
       <View style={styles.container}>
            <Image source={require('../assets/img1.png')}/>
            <View style={{padding:5, marginTop:5,borderBottomColor: 'red',alignItems: 'center'}}>
                <Button 
                    title="SignUp"
                    borderColor={'black'}
                    color='#6495ed'
                    onPress= {handleSignUpPress}
                />
            </View>
            <View style={{padding:5, marginTop:5,borderBottomColor: 'red',alignItems: 'center'}}>
                <Button 
                    title="Login"
                    borderColor={'black'}
                    color='#6495ed'
                    onPress={handleLoginPress}
                />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center',paddingHorizontal:15 ,marginTop:60}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                <View>
                    <Text style={{width: 50, textAlign: 'center',fontSize:22}}>Or</Text>
                  </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
              </View>
              <View>
                <Text style={{marginTop:5, fontSize:18,marginTop:20}}>Sign Up From  </Text>
              </View> 
              <View style={styles.photo}>
                  
                    <Entypo onPress={()=>{}} name="facebook" size={50} color="blue" style={{ marginRight: 10 }} />
                    <FontAwesome onPress={()=>{}} name="google-plus-square" size={50} color="red" style={{ marginHorizontal: 10 }} />
                    <Ionicons onPress={()=>{}} name="logo-apple" size={55} color="black" style={{ marginLeft: 10 }} /> 
                         
              </View>
       </View>
       
       
       
       
    

    )
}
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        marginTop:20,
        alignItems:'center',
    },
     photo:{
        alignItems:'center',
        marginTop:40,
        flexDirection:'row',
    },
})
export default WelcomePage