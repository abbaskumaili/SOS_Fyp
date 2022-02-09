import React, {useEffect, useState} from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import Headers from '../../Components/Headers/Headers';
import styles from './Style';
import Language from '../../Utils/Language';
const TermAndCondition = ({navigation}) => {
  return (
    <View style={styles.MainView}>
      <Headers
        NameLabel="Term And Condition"
        labelIconBackHeader={true}
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView>
        <Text style={styles.txtTerm}>{Language.termAndCondition}</Text>
      </ScrollView>
    </View>
  );
};
export default TermAndCondition;
