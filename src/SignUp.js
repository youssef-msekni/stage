import React from 'react'
import { StyleSheet, Text, View ,Image,TextInput } from 'react-native'
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

      <View style={{flexDirection: 'row', alignItems: 'center',paddingHorizontal:15 ,marginTop:60}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                <View>
                    <Text style={{width: 50, textAlign: 'center',fontSize:22}}>Or</Text>
                  </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
              </View>
              <View>
                <Text style={{marginTop:5, fontSize:18}}>Sign Up From  </Text>
              </View> 
              <View style={styles.photo}>
                  
                    <Entypo onPress={()=>{}} name="facebook" size={50} color="blue" style={{ marginRight: 10 }} />
                    <FontAwesome onPress={()=>{}} name="google-plus-square" size={50} color="red" style={{ marginHorizontal: 10 }} />
                    <Ionicons onPress={()=>{}} name="logo-apple" size={55} color="black" style={{ marginLeft: 10 }} /> 
                         
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
    marginTop:80,
    flexDirection:'row',
  },
});
export default SignUp
