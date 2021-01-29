import React,{Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component
{
  UNSAFE_componentWillMount(){
    firebase.initializeApp(
      {
        apiKey: "AIzaSyD7NUJaoPp8FoJOPxMugm3s0nbGws08uQA",
        authDomain: "auth-acd3a.firebaseapp.com",
        projectId: "auth-acd3a",
        storageBucket: "auth-acd3a.appspot.com",
        messagingSenderId: "1028011588909",
        appId: "1:1028011588909:web:6c3586370a04a39b2367a4",
        measurementId: "G-R9R1XBFD5Y"
      }
    );
  } 
   render()
   {
     return(
       <View>
           <Header headerText="Authentication" />
           <LoginForm />
       </View>
     );
   }
}

export default App;