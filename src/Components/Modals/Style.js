import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../Utils/Theme';
const styles = StyleSheet.create({
  modalWrap: {
    flex: 1,
    alignItems: Theme.align,
    justifyContent: Theme.align,
  },
  imgLogo: {
    width: Theme.wp('12%'),
    height: Theme.wp('12%'),
  },
  txtLoading: {
    fontSize: Theme.txtMedium,
    color: Theme.txtWhite,
    margin: '5%',
  },
  indic: {
    margin: '5%',
  },
  toastModalWrap: {
    backgroundColor: Theme.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding:'2%'
  },
});

export default styles;
