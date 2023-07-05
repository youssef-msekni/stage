import React from 'react'
import { Text, View, StyleSheet, Button,Alert,Image,ScrollView } from 'react-native';
import { Ionicons,FontAwesome,Feather  } from '@expo/vector-icons'; 
const Profile = () => {
    return(

      <ScrollView style={styles.container}>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={{fontSize:26,marginStart:150}}>   Profile</Text>
                    <FontAwesome onPress={()=>Alert.alert('Search')} name="search" size={30} color="black" style={{ marginLeft:80 }} />
                    <Ionicons onPress={()=>Alert.alert('Notification')} name="md-notifications-outline" size={30} color="black" style={{ marginHorizontal:10 }} />
                </View>
                <View style={{flexDirection:'row',marginTop:10,justifyContent:'center',alignItems:'center'}}>
                    
                   <Image style={{borderRadius:600}} source={require('../assets/user.png')}/>
                    
                </View>
                <View style={{marginTop:10,justifyContent:'center',alignItems:'center'}}>
                     <Text style={{fontSize:24}}>Username</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={{fontSize:20}}>       30 Followers</Text>
                    <Text style={{fontSize:20}}>             </Text>
                    <View style={styles.verticleLine}></View>
                    <Text style={{fontSize:20}}>              5 Topics</Text>
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:20}}>                        Most Recent Topics :</Text>
                </View>
                <View style={{marginTop:15}}>
                    <Text style={{fontSize:24,fontWeight: 'bold',fontStyle: 'italic',backgroundColor:'white'}}>  Some Title</Text>
                </View>
                <View style={{flexDirection: 'row',backgroundColor:'white'}}>
                    <View style={{flexDirection: 'row', marginTop:15,marginVertical:20,backgroundColor:'white'}}>
                        <Text style={{fontSize:18,marginRight:160,marginStart:10}}>02/02/2022</Text>
                        <FontAwesome name="star" size={24} color="goldenrod" />
                        <FontAwesome name="star" size={24} color="goldenrod" />
                        <FontAwesome name="star" size={24} color="goldenrod" />
                        <FontAwesome name="star" size={24} color="goldenrod" />
                        <FontAwesome name="star-half-empty" size={24} color="goldenrod" />
                        <Feather name="star" size={24} color="goldenrod" />
                    </View>
                    
                   
                  </View>
                  <View style={{backgroundColor:'white'}}>
                    <Text style={{fontSize:20}}>  Nous savons à quel point il est difficile de trouver rapidement un sujet d’exposé intéressant.  C’est pour cette raison que nous avons créé une liste de 200 idées de présentation orale pour vous aider.</Text>
                    <View style={{flexDirection: 'row',marginTop:5}}>
                      <Text style={{fontSize:16,color:'purple',borderRadius:20,borderColor:'purple'}}>  #Tag  </Text>
                      <Text style={{fontSize:16,color:'green',borderRadius:20,borderColor:'green'}}>#Tag</Text>
                      <Text style={{fontSize:18,marginLeft:270}}>30</Text>
                      <FontAwesome name="comments" size={24} color="black" />
                    </View>
                  </View>
                   <View>
                    <Text>        </Text>
                   </View>
                   <View style={{marginTop:15}}>
                    <Text style={{fontSize:24,fontWeight: 'bold',fontStyle: 'italic',backgroundColor:'white'}}>  Some Title</Text>
                </View>
                <View style={{flexDirection: 'row',backgroundColor:'white'}}>
                    <View style={{flexDirection: 'row', marginTop:15,marginVertical:20,backgroundColor:'white'}}>
                        <Text style={{fontSize:18,marginRight:160,marginStart:10}}>02/02/2022</Text>
                        <FontAwesome name="star" size={24} color="goldenrod" />
                        <FontAwesome name="star" size={24} color="goldenrod" />
                        <FontAwesome name="star" size={24} color="goldenrod" />
                        <FontAwesome name="star" size={24} color="goldenrod" />
                        <FontAwesome name="star-half-empty" size={24} color="goldenrod" />
                        <Feather name="star" size={24} color="goldenrod" />
                    </View>
                    
                   
                  </View>
                  <View style={{backgroundColor:'white'}}>
                    <Text style={{fontSize:20}}>  Nous savons à quel point il est difficile de trouver rapidement un sujet d’exposé intéressant.  C’est pour cette raison que nous avons créé une liste de 200 idées de présentation orale pour vous aider.</Text>
                    <View style={{flexDirection: 'row',marginTop:5}}>
                      <Text style={{fontSize:16,color:'purple',borderRadius:20,borderColor:'purple'}}>  #Tag  </Text>
                      <Text style={{fontSize:16,color:'green',borderRadius:20,borderColor:'green'}}>#Tag</Text>
                      <Text style={{fontSize:18,marginLeft:270}}>30</Text>
                      <FontAwesome name="comments" size={24} color="black" />
                    </View>
                  </View>
         </ScrollView>
     )
}


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

export default Profile