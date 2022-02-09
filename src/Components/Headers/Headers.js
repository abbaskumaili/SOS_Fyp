import React from 'react';
import {View, Text, Image} from 'react-native';
import Theme from '../../Utils/Theme';
import {AntDesign} from '../../Utils/Exports'
import styles from './Style';

const Headers = props => {
  const {
    NameLabel,
    onLogoutPress,
    onSettingPress,
    onPress,
    homeScreenHeader,
    labelIconBackHeader,
    onBackPress,
    tabsHeader,
  } = props;

  return (
    <>
      {homeScreenHeader === true ? (
        <View style={styles.headerWrap}>
          <AntDesign
            name="setting"
            size={Theme.iconSize}
            color={Theme.white}
            onPress={onSettingPress}
          />

          <Text style={styles.txtLabel}>{NameLabel}</Text>
          <AntDesign
            name="logout"
            size={Theme.iconSize}
            color={Theme.white}
            onPress={onLogoutPress}
          />
        </View>
      ) : labelIconBackHeader === true ? (
        <View style={styles.headerWrap}>
          <AntDesign
            name="left"
            size={Theme.iconSize}
            color={Theme.white}
            onPress={onBackPress}
          />
          <Text style={styles.txtLabel}>{NameLabel}</Text>
          <Text style={{color: Theme.primary}}>.....</Text>
        </View>
      ) : tabsHeader === true ? (
        <View style={styles.headerWrapTab}>
          <Image
            source={require('../../Assets/LogoBg.png')}
            style={styles.imgLogoBg}
          />
        </View>
      ) : null}
    </>
  );
};
export default Headers;
