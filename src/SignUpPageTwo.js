import React from 'react'
import { StyleSheet, Text, View ,Image,TextInput,Button,Alert } from 'react-native'
import { FontAwesome,Ionicons,Entypo } from '@expo/vector-icons'

const SignUpPageTwo =()=> {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img1.png')}/>
    <View/>
    <View style={{margin:10,backgroundColor:'white'}}>
        <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 0,
          borderBottomWidth:2,
          width:250,
          padding:10,
        }}
        placeholder='Username'
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
        placeholder='Number'
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 0,
          borderBottomWidth:2,
          width:250,
          padding:5,
         
        }}
        placeholder='Date 30/12/2022'
      />
    </View>

    <View style={{padding:5, marginTop:20,borderBottomColor: 'red',alignItems: 'center',flexDirection:'row'}}>
      <Button 
          title="Back"
          borderColor={'black'}
          color='#6495ed'
          onPress={() => Alert.alert('Go back to signUp page')}
        />
        <Text>     </Text>
      <Button
        title="SignUp"
        color='#6495ed'
        onPress={() => Alert.alert('Go to Topic page')}
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
                <Text style={{fontSize:18,marginTop:15}}>    Sign Up From  </Text>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    marginTop:180,
    
  },
  photo:{
    alignItems:'center',
    marginTop:20,
    flexDirection:'row',
    marginBottom:70,
  },
});
export default SignUpPageTwo
