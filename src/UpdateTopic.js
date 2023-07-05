import React from 'react'
import { Text, View, StyleSheet, Button,Alert,TextInput } from 'react-native';
import { Ionicons,Feather  } from '@expo/vector-icons'; 
import { SelectList } from 'react-native-dropdown-select-list'

const UpdateTopic = () => {
   const [selected, setSelected] = React.useState("");

     const data = [
                    {key:'1', value:'Mobiles', },
                    {key:'2', value:'Android'},
                    {key:'3', value:'Ios'},
                    {key:'4', value:'Mac', },
                    {key:'5', value:'Windows'},
                    
                ]
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row',justifyContent: 'center',alignItems:'center',marginTop:10}}>
                <Ionicons onPress={()=>Alert.alert('go back to Topic page')} name="chevron-back" size={28} color="black" />
                <Text style={{fontSize:26,marginStart:100,fontWeight: 'bold',fontStyle: 'italic',letterSpacing: 0.5}}>Update Topic</Text>
                <Ionicons onPress={()=>Alert.alert('Notification')} name="md-notifications-outline" size={30} color="black" style={{ marginStart:100 }} />
            </View>
            <View style={{marginTop:20,flexDirection:'row'}}>
                <Text style={{fontSize:24}}>  Title :                                           </Text>
                
            </View>
            <View style={{backgroundColor:'whitesmoke',marginTop:10}}>
                <TextInput
                    style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 0,
                    borderBottomWidth:2,
                    width:500,
                    padding:10,
                    marginTop:10,
                    }}
                    placeholder='Write Title'
                />
            </View>
            <View style={{marginTop:15}}>
                <Text style={{fontSize:24}}>  Choose Category</Text>
            </View>
            <View style={{backgroundColor:'whitesmoke',marginTop:10}}>
               <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={data} 
                    save="value"
                />
            </View>
            <View style={{marginTop:10}}>
                <Text style={{fontSize:23}}>  Be More Specific With Tags :</Text>
            </View>
            <View style={{marginTop:5,flexDirection:'row'}}>
                <Text style={{fontSize:18,color:'purple',borderRadius:20,borderColor:'purple'}}>   #Tag  </Text>
                <Text style={{fontSize:18,color:'green',borderRadius:20,borderColor:'green'}}> #Tag     </Text>
                <Feather onPress={()=>{Alert.alert('add tags')}} name="plus-square" size={26} color="blue" />
            </View>
            <View style={{marginTop:10}}>
                <Text style={{fontSize:24}}>  Description :</Text>
            </View>
            <View style={{marginTop:10,backgroundColor:'whitesmoke'}}>
            <TextInput
                    style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 0,
                    borderBottomWidth:2,
                    width:500,
                    padding:10,
                    marginTop:10,
                    }}
                    placeholder='Write Description'
                />
            </View>
            <View style={{ marginTop:60}}>
                <Button
                    title="Update"
                    color='green'
                    onPress={() => Alert.alert('Update the Topic')}
                    />
            </View>
            
        </View>

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

export default UpdateTopic