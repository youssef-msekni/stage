import React from 'react'
import { StyleSheet, Text, View ,Image,TextInput,Button,Alert } from 'react-native'
import { FontAwesome,Ionicons,Entypo } from '@expo/vector-icons'

const SignUpPageTwo =()=> {
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

    <View style={{padding:5, marginTop:5,borderBottomColor: 'red',alignItems: 'center'}}>
      <Button 
          title="SignUp"
          borderColor={'black'}
          color='#6495ed'
          onPress={() => Alert.alert('SignUp')}
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

const styles = StyleSheet.create( {
  container: {
    flex: 0.75,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    marginTop:180,
    
  },
  photo:{
    alignItems:'center',
    marginTop:50,
    flexDirection:'row',
    marginBottom:50,
  },
});
export default SignUpPageTwo
