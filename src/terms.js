import React, {useState} from 'react';
import { Text, View, StyleSheet, Button,Alert } from 'react-native';

const Trems = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <View style={styles.container}>
     <Text style={{fontSize:24,paddingTop:40}}>
          Terms of use
     </Text>
     <View>
      <Text style={{fontSize:20,paddingTop:40, paddingLeft:5,paddingRight:5}}>
          This website is operated by Youssef Msekni. The terms “we”, “us”, and “our” refer to Youssef Msekni. The use of our website is subject to the following terms and conditions of use, as amended from time to time (the “Terms”). The Terms are to be read together by you with any terms, conditions or disclaimers provided in the pages of our website. Please review the Terms carefully. The Terms apply to all users of our website, including without limitation, users who are browsers, customers, merchants, vendors and/or contributors of content. If you access and use this website, you accept and agree to be bound by and comply with the Terms and our Privacy Policy. If you do not agree to the Terms or our Privacy Policy, you are not authorized to access our website, use any of our website’s services or place an order on our website.
     </Text>
     <View style={{padding:5, marginTop:5,borderBottomColor: 'red',alignItems: 'center'}}>
      <Button 
          title="Accept"
          borderColor={'black'}
          color='#6495ed'
          onPress={() => Alert.alert('You have accepted the rules')}
        />
    </View>
      
    </View>
    </View>
    
  );
};

export default Trems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: 'white',
  },

});