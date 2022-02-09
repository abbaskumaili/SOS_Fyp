import {StyleSheet} from 'react-native';
import Theme from '../../Utils/Theme';
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: Theme.secondary,
  },
  txtTerm: {
    color: Theme.txtBlack,
    fontSize: Theme.txtMedium,
    textAlign: 'justify',
    alignSelf: "center",
    width:'95%'
  }
});

export default styles;
