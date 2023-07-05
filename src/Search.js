import React from 'react'
import { Text, View, StyleSheet, Button,Alert,ScrollView,TextInput } from 'react-native';
import { FontAwesome,Ionicons,Feather  } from '@expo/vector-icons'; 
import { SelectList } from 'react-native-dropdown-select-list'

const Search = () => {
    const [selected, setSelected] = React.useState("");

     const data = [
                    {key:'1', value:'General', },
                    {key:'2', value:'Apple'},
                    {key:'3', value:'Pollution'},
                    {key:'4', value:'Evaluation', },
                    {key:'5', value:'virus'},
                    
                ]
    const data1 = [
                    {key:'1', value:'Mobiles', },
                    {key:'2', value:'Android'},
                    {key:'3', value:'Ios'},
                    {key:'4', value:'Mac', },
                    {key:'5', value:'Windows'},
                    
                ]
    return(
        <ScrollView style={styles.container}>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={{fontSize:28,marginStart:150,fontStyle:'italic',fontWeight:'bold'}}>  Topics</Text>
                    <FontAwesome onPress={()=>Alert.alert('Search')} name="search" size={30} color="black" style={{ marginLeft:80 }} />
                    <Ionicons onPress={()=>Alert.alert('Notification')} name="md-notifications-outline" size={30} color="black" style={{ marginHorizontal:10 }} />
                </View>
                <View style={{backgroundColor:'whitesmoke',marginTop:10}}>
                    <View style={{marginTop:15}}>
                        <TextInput
                            style={{
                            height: 40,
                            borderColor: 'black',
                            borderWidth: 0,
                            borderBottomWidth:2,
                            width:400,
                            padding:10,
                            
                            }}
                            placeholder='Search Here'
                        />
                    </View>
                    <View style={{marginTop:15,flexDirection:'row'}}>
                        <Text style={{fontSize:24}}>Category :                  </Text>
                        <SelectList 
                                setSelected={(val) => setSelected(val)} 
                                data={data1} 
                                save="value"
                            />
                    </View>
                     <View style={{marginTop:15,flexDirection:'row'}}>
                        <Text style={{fontSize:24}}>Tags :                         </Text>
                        <SelectList 
                                setSelected={(val) => setSelected(val)} 
                                data={data} 
                                save="value"
                            />
                    </View>
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
                  <View><Text>                 </Text></View>
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
                  <View><Text>                 </Text></View>
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
})

export default Search