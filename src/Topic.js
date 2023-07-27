import React,{useState} from 'react'
import { Text, View, StyleSheet, Button,Alert } from 'react-native';
import { Ionicons,FontAwesome,Feather ,AntDesign } from '@expo/vector-icons'; 
import Settings from './settings';
const Topic = () => {

  const [ShowSettings, setShowSettings] = useState(false);
   const handleSettingsPress = () => {
        setShowSettings(true);
  };
  if (ShowSettings){
        return <Settings/>;
    }
    else{
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row',marginTop:10,marginLeft:20}}>
                    <Text style={{fontSize:28,marginStart:140,fontWeight: 'bold',fontStyle: 'italic',letterSpacing: 0.5}}>Topic</Text>
                    <Ionicons onPress={()=>Alert.alert('Notification')} name="md-notifications-outline" size={30} color="black" style={{ marginStart:100 }} />
                    <Text>   </Text>
                    <AntDesign onPress={handleSettingsPress} name="setting" size={28} color="black" />
                </View>
              <View style={{flexDirection: 'row',marginTop:15,margin:15,justifyContent: 'space-between',}}>
                    <Button
                      title="Tourism"
                      onPress={() => Alert.alert('Tourism selected')}
                    />
                    <Button
                      title="Web"
                      onPress={() => Alert.alert('Web selected')}
                    />
                    <Button
                      title="Mobile"
                      onPress={() => Alert.alert('Mobile selected')}
                    />
                    <Button
                      title="Events"
                      onPress={() => Alert.alert('Events selected')}
                    />
                    <Button
                      title="TVs"
                      onPress={() => Alert.alert('TVs selected')}
                    />

              </View>
                
                <View>
                    <Text style={{fontSize:24,fontWeight: 'bold',fontStyle: 'italic',backgroundColor:'white'}}>Topic Title</Text>
                </View>
                <View style={{flexDirection: 'row',backgroundColor:'white'}}>
                    <FontAwesome name="user" size={30} color="black"  />
                    <Text style={{fontSize:22,marginLeft:10}}>Username</Text>
                
                    <View style={{flexDirection: 'row', marginTop:35,marginVertical:20,backgroundColor:'white'}}>
                        <Text style={{fontSize:18,marginRight:160,marginStart:-130}}>02/02/2022</Text>
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
                   <View >
                     <Text style={{fontSize:24,fontWeight: 'bold',fontStyle: 'italic',backgroundColor:'white'}}>Topic Title</Text>
                    </View>
                  <View style={{flexDirection: 'row',backgroundColor:'white'}}>
                      <FontAwesome name="user" size={30} color="black"  />
                      <Text style={{fontSize:22,marginLeft:10}}>Username</Text>
                  
                      <View style={{flexDirection: 'row', marginTop:35,marginVertical:20,backgroundColor:'white'}}>
                          <Text style={{fontSize:18,marginRight:160,marginStart:-130}}>02/02/2022</Text>
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
                     <Text style={{fontSize:24,fontWeight: 'bold',fontStyle: 'italic',backgroundColor:'white'}}>Topic Title</Text>
                   </View>
                  <View style={{flexDirection: 'row',backgroundColor:'white'}}>
                      <FontAwesome name="user" size={30} color="black"  />
                      <Text style={{fontSize:22,marginLeft:10}}>Username</Text>
                  
                    <View style={{flexDirection: 'row', marginTop:35,marginVertical:20,backgroundColor:'white'}}>
                        <Text style={{fontSize:18,marginRight:160,marginStart:-130}}>02/02/2022</Text>
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
                
                  
                
        </View>
    )
}}


const styles = StyleSheet.create({
  container:{
        
        flexDirection:'column',
        backgroundColor:'gainsboro',
        marginTop:20,
    },
})

export default Topic
