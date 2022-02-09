import React from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';
import Theme from '../../Utils/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import styles from './Style';
const Modals = props => {
  const {loader, loaderIndicator, label, customToast, isVisible} = props;
  return (
    <>
      {loaderIndicator === true ? (
        <Modal isVisible={loader}>
          <View style={styles.modalWrap}>
            {/* <Image
              source={require('../../Assets/Logo.jpg')}
              style={styles.imgLogo}
            /> */}

            <ActivityIndicator
              size="large"
              color={Theme.white}
              style={styles.indic}
            />
            <Text style={styles.txtLoading}>{label}</Text>
          </View>
        </Modal>
      ) : customToast === true ? (
        <Modal isVisible={isVisible}>
          <View style={styles.toastModalWrap}>
            <Image
              source={require('../../Assets/copy.png')}
              style={styles.imgLogo}
            />
            <Text
              style={{
                ...styles.txtLoading,
                color: Theme.txtBlack,
                fontSize: Theme.txtSmall,
              }}>
              {label}
            </Text>
          </View>
        </Modal>
      ) : null}
    </>
  );
};
export default Modals;
