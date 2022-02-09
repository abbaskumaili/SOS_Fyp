import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {auth} from '../../Utils/Exports'
import styles from './Style';
import Headers from '../../Components/Headers/Headers';
const Cart = ({navigation}) => {
  return (
    <View style={styles.MainView}>
      <Headers tabsHeader={true} />
      <Text>Cart</Text>
    </View>
  );
};
export default Cart;
