import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity, Text,ScrollView} from 'react-native';
import Buttons from '../../Components/Buttons/Buttons';
import { AntDesign } from '../../Utils/Exports';
import Theme from '../../Utils/Theme';
import styles from './Style';
const BaseScreen = ({navigation}) => {


  return (
    <View style={styles.MainView}>
      <ScrollView>
        <View style={styles.wrap50}>
          <Image
            source={require('../../Assets/LogoBg.png')}
            style={styles.imgLogo}
          />
        </View>
        <View style={{...styles.wrap50}}>
          <View style={{margin: '5%'}}>
            <Buttons
              btnMedium={true}
              label={'Login'}
              alignSelf={Theme.align}
              onPress={() => navigation.navigate('LoginScreen')}
              BGcolor={Theme.secondary}
              txtColor={Theme.txtWhite}
            />
          </View>
          <View style={{margin: '0%'}}>
            <Buttons
              btnMedium={true}
              label={'Register'}
              alignSelf={Theme.align}
              onPress={() => navigation.navigate('SignupScreen')}
              BGcolor={Theme.txtWhite}
              txtColor={Theme.secondary}
            />
          </View>
          <View style={styles.flexMarginRow}>
            <View style={styles.widthBorder} />
            <Text style={styles.txtOr}>Or Login with </Text>
            <View style={styles.widthBorder} />
          </View>
          <TouchableOpacity style={styles.wrapGoogle}>
            <View style={{}}>
              <AntDesign name="google" size={Theme.iconSize} />
            </View>
            <Text style={styles.txtGoggle}>Google</Text>

            <Text style={{color: Theme.primary}}>check</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default BaseScreen;
