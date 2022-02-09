import React, {useEffect, useState} from 'react';

import {View, Image, Text, TouchableOpacity} from 'react-native';
import Buttons from '../../Components/Buttons/Buttons';
import Modal from '../../Components/Modals/Modals';
import {Entypo, AntDesign} from '../../Utils/Exports';
import TextInput from '../../Components/TextInputs/TextInputs';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import styles from './Style';
import Theme from '../../Utils/Theme';
import FastImage from 'react-native-fast-image';
import {Formik} from 'formik';
import * as yup from 'yup';
import {auth} from '../../Utils/Exports';

const reviewSchema = yup.object({
  Email: yup.string().email('Invalid email').required('Required Field'),
  Password: yup
    .string()
    .required('Password field not empty')
    .min(8, 'Minmum 8 Strings Required')
    .max(30, 'Limit Exceed'),
});

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [icEye, setIcEye] = React.useState('eye-with-line');
  const [showPassword, setShowPassword] = React.useState(true);
  const [loader, Setloader] = React.useState(false);

  //Set Eye Icon
  const eyeIconFun = () => {
    setShowPassword(!showPassword);
    if (showPassword === true) {
      setIcEye('eye');
    } else {
      setIcEye('eye-with-line');
    }
  };
  const loginFunc = values => {
    navigation.navigate('BottomNavigation');
    return;
    Setloader(true);
    auth
      .signInWithEmailAndPassword(values.Email, values.Password)
      .then(() => {
        Setloader(false);
        navigation.replace('HomeScreen');
      })
      .catch(error => {
        Setloader(false);
        alert('Error' + error);
      });
  };

  return (
    <View style={styles.MainView}>
      <KeyboardAwareScrollView>
        <Formik
          initialValues={{Email: email, Password: password}}
          validationSchema={reviewSchema} //check validation
          onSubmit={(values, actions) => {
            // action is use  for call reset form
            actions.resetForm();
            loginFunc(values);
          }}>
          {props => (
            <>
              <View style={styles.wrap50}>
                <AntDesign
                  name="left"
                  size={Theme.iconSizeLarge}
                  style={styles.iconBack}
                  onPress={() => navigation.goBack()}
                /> 
                <Image
                  style={styles.imgKey}
                  source={require('../../Assets/key.png')}
                  resizeMode={'cover'}
                /> 
                <Text style={styles.txtLogin}>Login into SOS</Text>
              </View>
              <View style={{...styles.wrap50}}>
                <View style={styles.wrapEmailPass}>
                  <Text style={styles.txtEmail}>Email</Text>
                  <View style={{marginTop: '3%'}}>
                    <TextInput
                      placeholder="Input email"
                      simpleTxtInput={true}
                      value={props.values.Email}
                      onChangeText={props.handleChange('Email')}
                    />
                    <Text style={styles.errorTxt}>
                      {props.touched.Email && props.errors.Email}
                    </Text>
                  </View>
                  <Text style={styles.txtEmail}>Password</Text>
                  <View style={{marginTop: '3%'}}>
                    <View style={styles.wrapPassTxtInp}>
                      <TextInput
                        placeholder="Input Password"
                        simpleTxtInput={true}
                        value={props.values.Password}
                        secureTextEntry={showPassword}
                        maxLength={25}
                        onChangeText={props.handleChange('Password')}
                      />
                      <Entypo
                        name={icEye}
                        size={Theme.iconSize}
                        style={{right: Theme.wp('5%')}}
                        color="grey"
                        onPress={() => eyeIconFun()}
                      />
                    </View>
                    <Text style={styles.errorTxt}>
                      {props.touched.Password && props.errors.Password}
                    </Text>
                  </View>
                </View>

                <View style={{margin: '0%'}}>
                  <Buttons
                    btnMedium={true}
                    label={'Login'}
                    alignSelf={Theme.align}
                    onPress={props.handleSubmit}
                    BGcolor={Theme.secondary}
                    txtColor={Theme.txtWhite}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SignupScreen')}>
                  <Text style={styles.txtNotAccount}>
                    Not have an account?{' '}
                    <Text
                      style={{
                        ...styles.txtNotAccount,
                        fontWeight: 'bold',
                        color: Theme.secondary,
                      }}>
                      {' '}
                      Register
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
      <Modal
        loader={loader}
        loaderIndicator={true}
        label={'Signing In please wait...'}
      />
    </View>
  );
};

export default Login;
