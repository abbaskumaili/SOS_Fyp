import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../Utils/Theme';
const styles = StyleSheet.create({
  wraptxt: {
    backgroundColor: Theme.lightBlue,
    width: Theme.wp('40%'),
    margin: '2%',
    borderRadius: 10,
    height: Theme.hp('23%'),
  },
  imgDesign: {
    width: Theme.wp('18%'),
    height: Theme.wp('18%'),
    alignSelf: 'center',
    marginTop: '5%',
  },
  txtName: {
    color: Theme.secondary,
    fontSize: Theme.txtMedium,
    textAlign: 'center',
    fontWeight: '500',
  },
  txtFruitName: {
    color: Theme.txtWhite,
    fontSize: Theme.txtMedium1,
    fontWeight: '600',
    width: '70%',
    textAlign: 'center',
  },
  txtBtnName: {
    color: Theme.secondary,
    fontSize: Theme.txtMedium1,
    fontWeight: '600',
    left:'10%'
  },
  wrapPlus: {
    backgroundColor: Theme.secondary,
    width: Theme.wp('7%'),
    height: Theme.wp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  wrapBtn: {
    backgroundColor: Theme.lightBlue,
    width: Theme.wp('43%'),
    margin: '2%',
    borderRadius: 10,
    height: Theme.hp('17%'),
    borderRadius: 20,
    elevation: 5,
  },
  wrapBtnSettings: {
    backgroundColor: Theme.lightBlue,
    width: Theme.wp('90%'),
    marginTop: '5%',
    borderRadius: 10,
    height: Theme.hp('15%'),
    borderRadius: 20,
    elevation: 5,
    justifyContent:'center'
  },
  imgFoods: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
