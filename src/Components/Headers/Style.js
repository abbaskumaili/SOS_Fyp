import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../Utils/Theme';
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: Theme.white,
  },

  headerWrap: {
    backgroundColor: Theme.primary,
    flexDirection: 'row',
    alignItems: Theme.align,
    justifyContent: 'space-between',
    padding: '4%',
  },
  txtLabel: {
    color: Theme.txtWhite,
    fontWeight: 'bold',
    fontSize: Theme.txtMedium,
  },
  headerWrapTab: {
    backgroundColor: Theme.lightOrange,
    width: '100%',
    alignItems: 'center',
  },
  imgLogoBg: {
    width: Theme.wp('20%'),
    height: Theme.wp('20%'),
  },
});

export default styles;
