import React, { useEffect, useState } from "react";

import {View, Image, Text} from 'react-native';
import Modal from "../../Components/Modals/Modals";
// import { auth, db } from "../../Utils/Exports";
import Buttons from "../../Components/Buttons/Buttons";
import {Entypo,AntDesign} from '../../Utils/Exports';
import TextInput from "../../Components/TextInputs/TextInputs";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import styles from "./Style";
import Theme from "../../Utils/Theme";
import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
  Name: yup
    .string()
    .min(0, 'Minimum Input')
    .required('Required Field')
    .max(10, 'Limit Exceed'),
  Email: yup.string().email('Invalid email').required('Required Field'),
  Password: yup
    .string()
    .min(8, 'Minimun length of 8 character')
    .required('Required Field'),
  ConfirmPassword: yup
    .string()
    .oneOf([yup.ref('Password'), null], 'Passwords must match')
    .required(''),
});

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [icEye, setIcEye] = useState("eye-with-line");
  const [icEye1, setIcEye1] = useState("eye-with-line");
  const [showPassword1, setShowPassword1] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [loader, Setloader] = useState(false);

  const signUpFun = (values) => {
    return
    Setloader(true);
    // auth
    //   .createUserWithEmailAndPassword(values.Email,values.Password)
    //   .then(() => {     
    //     Setloader(false);
    //     navigation.replace('HomeScreen');
    //     console.log("User account created & signed in!");
    //   })
    //   .catch((error) => {
    //     Setloader(false);
    //     if (error.code === "auth/email-already-in-use") {
    //      alert("That email address is already in use!");
    //     }

    //     if (error.code === "auth/invalid-email") {
    //     alert("That email address is invalid!");
    //     }

    //     console.error(error);
    //   });
  };

  const eyeIconFun = () => {
    setShowPassword(!showPassword);
    if (showPassword === true) {
      setIcEye("eye");
    } else {
      setIcEye("eye-with-line");
    }
  };
  const eyeIconFun1 = () => {
    setShowPassword1(!showPassword1);
    if (showPassword1 === true) {
      setIcEye1("eye");
    } else {
      setIcEye1("eye-with-line");
    }
  };

  return (
    <View style={styles.MainView}>
      <KeyboardAwareScrollView>
        <Formik
          initialValues={{
            Name: name,
            Email: email,
            Password: password,
            ConfirmPassword: confpassword,
          }}
          validationSchema={reviewSchema} //check validation
          onSubmit={(values, actions) => {
            // action is use  for call reset form
            actions.resetForm();
            signUpFun(values);
          }}>
          {props => (
            <>
              <View style={styles.wrap30}>
                <AntDesign
                  name="left"
                  size={Theme.iconSizeLarge}
                  style={styles.iconBack}
                  onPress={() => navigation.goBack()}
                />
                <Image
                  style={styles.imgKey1}
                  source={require('../../Assets/key.png')}
                  resizeMode={'cover'}
                />
                <Text style={styles.txtLogin}>Register into SOS</Text>
              </View>
              <View style={{...styles.wrap70}}>
                <View style={styles.wrapEmailPass}>
                  <Text style={styles.txtEmail}>Name</Text>
                  <View style={{marginTop: '3%'}}>
                    <TextInput
                      placeholder="Input name"
                      simpleTxtInput={true}
                      value={props.values.Name}
                      onChangeText={props.handleChange('Name')}
                    />
                    <Text style={styles.errorTxt}>
                      {props.touched.Name && props.errors.Name}
                    </Text>
                  </View>
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
                  <Text style={styles.txtEmail}>Confirm password</Text>
                  <View style={{marginTop: '3%'}}>
                    <View style={styles.wrapPassTxtInp}>
                      <TextInput
                        placeholder="Confirm password"
                        simpleTxtInput={true}
                        value={props.values.ConfirmPassword}
                        secureTextEntry={showPassword1}
                        maxLength={25}
                        onChangeText={props.handleChange('ConfirmPassword')}
                      />
                      <Entypo
                        name={icEye1}
                        size={Theme.iconSize}
                        style={{right: Theme.wp('5%')}}
                        color="grey"
                        onPress={() => eyeIconFun1()}
                      />
                    </View>
                    <Text style={styles.errorTxt}>
                      {props.touched.ConfirmPassword &&
                        props.errors.ConfirmPassword}
                    </Text>
                  </View>
                </View>

                <View style={{margin: '0%'}}>
                  <Buttons
                    btnMedium={true}
                    label={'Register'}
                    alignSelf={Theme.align}
                    onPress={props.handleSubmit}
                    BGcolor={Theme.secondary}
                    txtColor={Theme.txtWhite}
                  />
                </View>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
      <Modal
        loader={loader}
        loaderIndicator={true}
        label={'Signing Up please wait...'}
      />
    </View>
  );
};

export default SignUp;
