import React from 'react'
import { Text, View, StyleSheet, Button,Alert,TextInput } from 'react-native';
import { FontAwesome5,Ionicons  } from '@expo/vector-icons'; 
import { SelectList } from 'react-native-dropdown-select-list'

const AddTag = () => {
    const [selected, setSelected] = React.useState("");

     const data = [
                    {key:'1', value:'General', },
                    {key:'2', value:'Apple'},
                    {key:'3', value:'Pollution'},
                    {key:'4', value:'Evaluation', },
                    {key:'5', value:'virus'},
                    
                ]
    return(
        <View style={styles.container}>
            <View style={{alignItems:'center',marginTop:20,flexDirection:'row'}}>
                <Ionicons onPress={()=>Alert.alert('go back to Topic page')} name="chevron-back" size={30} color="black" />
                <Text>                                       </Text>
                <Text style={{fontSize:28,fontWeight:'bold',fontStyle:'italic'}}>AddTag</Text>
            </View>
            <View style={{marginTop:40}}>
                <Text style={{fontSize:24}}>   Selet Tag:</Text>
            </View>
            <View style={{marginTop:50,backgroundColor:'whitesmoke'}}>
                <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={data} 
                    save="value"
                />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center',paddingHorizontal:15 ,marginTop:70}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{width: 50, textAlign: 'center',fontSize:24}}>Or</Text>
                    </View>
                        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
             </View>
             <View style={{justifyContent:'center',alignItems:'center',marginTop:40}}>
                <Text style={{fontSize:28,fontWeight:'bold'}}>Create One</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:40}}>
                 <TextInput
                        style={{
                        backgroundColor:'whitesmoke',
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 0,
                        borderBottomWidth:2,
                        width:320,
                        padding:10,
                        
                        }}
                        placeholder='Create Tag'
                    />
                    <Text>          </Text>
                    <FontAwesome5 onPress={()=>{Alert.alert('Add tag to data base')}} name="plus-circle" size={40} color="blue" />

            </View>
            <View style={{marginTop:30}}>
                <Button
                    title="Done"
                    color='green'
                    onPress={() => Alert.alert('Create tag and go to CreateTopic page')}
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

export default AddTag 