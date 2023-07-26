import React from 'react'
import { StyleSheet } from 'react-native'
import SignUp from './src/SignUp'
import SignUppPageTwo from './src/SignUpPageTwo'
import WelcomePage from './src/welcomePage'
import Settings from './src/settings'
import Topic from './src/Topic'
import CreateTopic from './src/CreateTopic'
import AddTag from './src/AddTag'
import UpdateTopic from './src/UpdateTopic'
import Reply from './src/Reply'
import Profile from './src/Profile'
import Search from './src/Search'
import Terms from './src/terms'
import EditProfile from './src/EditProfile'

const App =()=> {
  return(
    <CreateTopic/>
  )
}
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  }});

export default App
