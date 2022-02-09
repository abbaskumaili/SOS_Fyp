import React, {useEffect, useState} from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import Headers from '../../Components/Headers/Headers';
import styles from './Style';
import Language from '../../Utils/Language';
const Support = ({navigation}) => {
  return (
    <View style={styles.MainView}>
      <Headers
        NameLabel="Support"
        labelIconBackHeader={true}
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView>
        <Text style={styles.txtTerm}>{Language.support}</Text>
      </ScrollView>
    </View>
  );
};
export default Support;
