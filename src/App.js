import React,{Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component
{
  state = { loggedIn: null };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
      else{
        this.setState({ loggedIn: false});
      }
    });
  } 

   renderContent() {
     switch (this.state.loggedIn){
       case true:
         return (
           <Button onPress={() => firebase.auth().signOut()}>
             Log Out
           </Button>
          );
       case false:
         return <LoginForm />;
       default: 
         return <Spinner size="large" color="blue" />;    
     }
     
   }

   render()
   {
     return(
       <View>
           <Header headerText="Authentication" />
           {this.renderContent()}
       </View>
     );
   }
}

export default App;