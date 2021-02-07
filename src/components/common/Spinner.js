import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyles}>
        <ActivityIndicator size={size || 'large'} color= "red" />
    </View>  
  );  
};

const styles = {
  spinnerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    marginTop: 20
  }  
};

export { Spinner };