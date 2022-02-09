import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Theme = {
  primary: '#f5fbf6',
  secondary: '#4cad73',
  gold: '#ada11f',
  txtWhite: '#ffffff',
  txtBlue: 'blue',
  lightGrey: '#f0f1f2',
  lightOrange: '#f7f3ce',
  lightBlue:'#d3ebdb',
  placeholderCol: 'grey',
  txtInput:'#f2f2f2',
  white: 'white',
  blue: '#5978ff',
  black: 'black',
  txtBlack: 'black',
  iconCol: '#D1D1D1',
  iconSize: 26,
  iconSizeLarge: 35,
  iconSizeSm: 18,
  iconSizeExSm: 12,
  bold: 'bold',
  errorColor: 'red',
  txtSmallest: hp('1.5%'),
  txtSmall: hp('1.7%'),
  txtMedium: hp('2%'),
  txtMedium1: hp('2.5%'),
  txtLarge: hp('3%'),
  txtExtraLarge: hp('4%'),
  align: 'center',
  wp,
  hp,
  width: wp('95%'),
};

export default Theme;
