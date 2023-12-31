import React,{useState} from 'react'
import { StyleSheet, Text, View ,Image,TextInput,Button,Alert,TouchableOpacity } from 'react-native'
import { FontAwesome,Ionicons,Entypo } from '@expo/vector-icons'
import Topic from './Topic'
import SignUp from './SignUp'

const Login =()=> {

  const [showTopic, setShowTopic] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
    const handleTopicPress = () => {
    setShowTopic(true);
  };
  const handleSignUpPress = () => {
    setShowSignUp(true);
  };
  if (showTopic) {
    return <Topic/>;
  } else if (showSignUp) {
    return <SignUp />;
  } else{

  return (
    <View style={styles.container}>
      <Image source={require('../assets/img1.png')}/>
    <View/>
    <View style={{margin:10}}>
        <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 0,
          borderBottomWidth:2,
          width:250,
          padding:10,
        }}
        placeholder='Email'
      />
       <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 0,
          borderBottomWidth:2,
          width:250,
          padding:10,
          marginVertical:20,
        }}
        placeholder='Password'
      />
    </View>
    <View style={{marginTop:20}}>
      <Button
        title="Login"
        color='#6495ed'
        onPress={handleTopicPress}
        />
        <Text style={{alignItems:'center',fontSize:16,marginTop:10}}> you don't have an account ? </Text>
        <TouchableOpacity style={{marginTop:10,fontSize:16}} onPress={handleSignUpPress}>
            <Text style={{alignItems:'center',color:'blue',fontSize:18,marginLeft:10}}>              Sign in </Text>
        </TouchableOpacity>
    </View>

      <View style={{flexDirection: 'row', alignItems: 'center',paddingHorizontal:15 ,marginTop:30}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                <View>
                    <Text style={{width: 50, textAlign: 'center',fontSize:22}}>Or</Text>
                  </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
              </View>
              <View>
                <Text style={{marginTop:5, fontSize:18}}>    Login From  </Text>
              </View> 
              <View style={styles.photo}>
                  
                  <Entypo onPress={()=>{Alert.alert('sign with facebook')}} name="facebook" size={50} color="blue" style={{ marginRight: 20 }} />
                  <FontAwesome onPress={()=>{Alert.alert('sign with google')}} name="google-plus-square" size={50} color="red" style={{ marginHorizontal: 20 }} />
                  <Ionicons onPress={()=>{Alert.alert('sign with apple')}} name="logo-apple" size={55} color="black" style={{ marginLeft: 20 }} /> 
                         
              </View>
                                 
      </View>  
    
  )
}}

const styles = StyleSheet.create( {
  container: {
    flex: 0.75,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:15,
    marginTop:120,
    
  },
  photo:{
    alignItems:'center',
    marginTop:30,
    flexDirection:'row',
  },
});
export default Login
