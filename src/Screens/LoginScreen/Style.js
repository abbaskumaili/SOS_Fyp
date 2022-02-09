import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../Utils/Theme';
const styles = StyleSheet.create({
  imgSplash: {
    width: Theme.wp('80%'),
    height: Theme.wp('50%'),
    alignSelf: Theme.align,
    marginTop: '10%',
  },
  imgSignUp: {
    width: Theme.wp('50%'),
    height: Theme.wp('40%'),
    alignSelf: Theme.align,
    marginTop: '10%',
  },
  imgLogin: {
    width: Theme.wp('50%'),
    height: Theme.wp('40%'),
    alignSelf: Theme.align,
    marginTop: '10%',
  },
  txtParent: {
    color: Theme.txtBlack,
    fontSize: Theme.txtMedium1,
    fontWeight: Theme.bold,
    marginTop: '2%',
  },
  txtWelcome: {
    color: Theme.txtBlack,
    fontWeight: '700',
    fontSize: Theme.txtMedium1,
    marginTop: '5%',
    bottom: -10,
  },
  txtCardPass: {
    color: Theme.white,
    fontWeight: '700',
    fontSize: Theme.txtMedium1,
  },
  wrapCvv: {
    width: Theme.wp('40%'),
  },
  viewCVVAndEx: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  txtSubs: {
    color: Theme.red,
    fontWeight: '700',
    fontSize: Theme.txtExtraLarge,
    marginTop: '10%',
    alignSelf: Theme.align,
  },
  txtSub: {
    color: 'red',
    fontWeight: '700',
    fontSize: Theme.txtMedium,
    marginTop: '5%',
    // backgroundColor: Theme.txtWhite,
    // padding: 5,
    borderRadius: 10,
    // bottom: 10,
    position: 'absolute',
    right: 10,
    top: 2,
    textAlign: Theme.align,
    // width: Theme.wp("20%"),
    // height: Theme.hp("2.5%"),
  },

  ///////

  txtInput: {
    marginTop: '4%',
  },
  btnLogin: {
    backgroundColor: Theme.primary,
    alignItems: Theme.align,
    justifyContent: Theme.align,
    marginTop: '20%',
    height: Theme.hp('8%'),
  },
  txtLogin: {
    color: Theme.secondary,
    fontWeight: '500',
    fontSize: Theme.txtLarge,
    textAlign: 'center',
  },
  txtForgotPass: {
    fontSize: Theme.txtSmall,
    textAlign: Theme.align,
    color: Theme.txtBlack,
    fontWeight: Theme.bold,
  },

  wrapActIndicator: {
    position: 'absolute',
    width: '100%',
    height: '10%',
    marginTop: '100%',
  },

  txtLoading: {
    fontSize: Theme.txtMedium,
    color: Theme.txtWhite,
    margin: '5%',
  },

  width45: {
    width: '45%',
  },
  width100: {
    width: '100%',
  },
  flexJustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapPassTxtInp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.txtInput,
    borderRadius: 10,
    height: Theme.hp('7%'),
  },
  // New from below
  MainView: {
    flex: 1,
    backgroundColor: Theme.primary,
  },
  setView: {
    width: Theme.wp('90%'),
    alignSelf: Theme.align,
  },
  wrap50: {
    width: '100%',
    height: Theme.hp('50%'),
  },
  txtOr: {
    color: Theme.txtBlack,
    fontSize: Theme.txtSmall,
    fontWeight: '400',
  },
  flexMarginRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
    width: Theme.wp('85%'),
    alignSelf: 'center',
  },
  widthBorder: {
    borderWidth: 0.5,
    width: '35%',
  },
  wrapGoogle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.7,
    width: Theme.wp('85%'),
    height: Theme.hp('7%'),
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: '7%',
    paddingHorizontal: '5%',
    borderColor: Theme.placeholderCol,
  },
  txtGoggle: {
    fontSize: Theme.txtSmall,
    color: Theme.txtBlack,
    fontWeight: '700',
  },
  imgLogo: {
    width: Theme.wp('60%'),
    height: Theme.wp('60%'),
    alignSelf: 'center',
    marginTop: '5%',
  },
  iconBack: {
    position: 'absolute',
    margin: '5%',
  },
  wrapEmailPass: {
    width: Theme.wp('85%'),
    alignSelf: 'center',
  },
  txtEmail: {
    fontSize: Theme.txtSmall,
    fontWeight: '600',
    color: Theme.secondary,
  },
  errorTxt: {
    fontSize: Theme.txtSmallest,
    color: 'red',
    margin: '2%',
  },
  txtNotAccount: {
    marginTop: '5%',
    textAlign: Theme.align,
    color: Theme.secondary,
  },
  wrap30: {
    width: '100%',
    height: Theme.hp('30%'),
  },
  wrap70: {
    width: '100%',
    height: Theme.hp('70%'),
  },
  imgKey: {
    height: Theme.wp('50%'),
    width: Theme.wp('50%'),
    alignSelf: 'center',
    marginTop: '10%',
  },
  imgKey1: {
    height: Theme.wp('35%'),
    width: Theme.wp('35%'),
    alignSelf: 'center',
    marginTop: '10%',
  },
});

export default styles;
