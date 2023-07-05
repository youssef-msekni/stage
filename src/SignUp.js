import React from 'react'
import { StyleSheet, Text, View ,Image,TextInput,Button,Alert } from 'react-native'
import { FontAwesome,Ionicons,Entypo } from '@expo/vector-icons'

const SignUp =()=> {

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
       <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 0,
          borderBottomWidth:2,
          width:250,
          padding:10,
          
        }}
        placeholder='Confirm Password'
      />
    </View>
    <View style={{marginTop:20}}>
      <Button
        title="Next"
        color='#6495ed'
        onPress={() => Alert.alert('Go to SignUpPageTwo')}
        />
    </View>

      <View style={{flexDirection: 'row', alignItems: 'center',paddingHorizontal:15 ,marginTop:30}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                <View>
                    <Text style={{width: 50, textAlign: 'center',fontSize:22}}>Or</Text>
                  </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
              </View>
              <View>
                <Text style={{marginTop:5, fontSize:18}}>    Sign Up From  </Text>
              </View> 
              <View style={styles.photo}>
                  
                  <Entypo onPress={()=>{Alert.alert('sign with facebook')}} name="facebook" size={50} color="blue" style={{ marginRight: 20 }} />
                  <FontAwesome onPress={()=>{Alert.alert('sign with google')}} name="google-plus-square" size={50} color="red" style={{ marginHorizontal: 20 }} />
                  <Ionicons onPress={()=>{Alert.alert('sign with apple')}} name="logo-apple" size={55} color="black" style={{ marginLeft: 20 }} /> 
                         
              </View>
                                 
      </View>
      
            

         
    
  )
}

const styles = StyleSheet.create( {
  container: {
    flex: 0.75,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:15,
    marginTop:100,
    
  },
  photo:{
    alignItems:'center',
    marginTop:40,
    flexDirection:'row',
  },
});
export default SignUp
