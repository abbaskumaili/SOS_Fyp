import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {auth} from '../../Utils/Exports'
import styles from './Style';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('BaseScreen');
    }, 2000);
  }, []);
     

  return (
    <View style={styles.MainView}>
      <Image
        source={require('../../Assets/LogoBg.png')}
        style={styles.imgSplash}
      />
    </View>
  );
};
export default Splash;
