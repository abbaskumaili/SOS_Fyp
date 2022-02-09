import {StyleSheet} from 'react-native';
import Theme from '../../Utils/Theme';
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: Theme.align,
  },
  txtCategory: {
    color: Theme.secondary,
    fontWeight: '500',
    fontSize: Theme.txtMedium1,
    textAlign: 'center',
    marginTop: '2%',
  },
  wrapFL: {
    paddingBottom: '20%',
  }
});

export default styles;
