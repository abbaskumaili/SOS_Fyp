import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {auth} from '../../Utils/Exports'
import styles from './Style';
import Headers from '../../Components/Headers/Headers';
import SettingFL from '../../Components/FlatLists/SettingFL';
const Settings = ({ navigation }) => {
      const [settingData, setSettings] = useState([
        {
          id: 1,
          btnName: 'Profile',
        },
        {
          id: 2,
          btnName: 'FAQs',
        },
        {
          id: 3,
          btnName: 'Track you order',
        },
        {
          id: 4,
          btnName: 'Payment Methods',
        },
        {
          id: 5,
          btnName: 'About us',
        },
        {
          id: 6,
          btnName: 'Contact us',
        },
      ]);
  return (
    <View style={styles.MainView}>
      <Headers tabsHeader={true} />
      <Text style={styles.txtSettings}>Settings</Text>
      <Text style={{...styles.txtSettings, fontWeight: '300', marginTop: '0%'}}>
        Quick Links
      </Text>
      <View style={styles.wrapFL}>
        <SettingFL
          data={settingData}
          SettingFL={true}
          navigation={navigation}
        />
      </View>
    </View>
  );
};
export default Settings;
