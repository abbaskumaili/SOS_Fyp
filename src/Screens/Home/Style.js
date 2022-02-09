import {StyleSheet} from 'react-native';
import Theme from '../../Utils/Theme';
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
  },
  searchWrap: {
    backgroundColor: Theme.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '5%',
    width: '85%',
    borderRadius: 10,
    elevation: 5,
    height: Theme.hp('7%'),
    alignItems: 'center',
    alignSelf: 'center',
  },
  wrap20: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap80: {width: '85%', alignItems: 'center'},
  txtInp: {
    width: '100%',
  },
  wrapCarosal: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
    height: Theme.hp('28%'),
  },
  wrapBgImage: {
    // backgroundColor: 'floralwhite',
    backgroundColor: Theme.primary,
    borderRadius: 5,
    height: Theme.hp('23%'),
    marginTop: '5%',
    width: '100%',
    borderRadius: 10,
  },
  txtFeatue: {
    color: Theme.secondary,
    fontWeight: '500',
    fontSize: Theme.txtMedium1,
    textAlign: 'center',
  },
  wrapFL: {
    width: Theme.width,
    alignSelf: 'center',
    alignItems: 'center',
    // paddingBottom: Theme.hp('55%'),
  },
});

export default styles;
