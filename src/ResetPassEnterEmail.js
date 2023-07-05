import React, {useState} from 'react';
import { Text, View, StyleSheet, Button,Image ,TextInput } from 'react-native';
import { FontAwesome,Ionicons,Entypo } from '@expo/vector-icons'

const ResetPasswordEnterEmail = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img1.png')}/>
      <Text style={{fontSize:24}}>
        Reset Password 
      </Text>
      <View style={styles.cadre}>
       <TextInput
        style={styles.input}   
        placeholder="Email"

      />
      </View>
      <View style={styles.cadre}>
      <Button
        title="Continue"
        onPress={() => Alert.alert('Next page')}
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
  );
};

export default ResetPasswordEnterEmail;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'white',
  },
   input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
cadre:{
  marginTop:25,
  paddingVertical:20,
  paddingHorizontal:20,
  letterSpacing:0.25,
},
});
