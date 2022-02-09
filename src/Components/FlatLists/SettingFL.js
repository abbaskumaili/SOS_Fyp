import React from 'react';
import {Text, FlatList, Image,View,TouchableOpacity,ImageBackground} from 'react-native';
import styles from './Style';
import { AntDesign } from '../../Utils/Exports';
import Theme from '../../Utils/Theme';
const SettingFL = props => {
  const { navigation, SettingFL, data } = props;
  return (
    <>
      {SettingFL === true ? (
        <>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
 
              return (
                <>
                  <TouchableOpacity
                    style={styles.wrapBtnSettings}
                    onPress={() => alert(item.btnName)}>
                    <Text style={styles.txtBtnName}>{item.btnName}</Text>
                  </TouchableOpacity>
                </>
              );
            }}
            keyExtractor={(item, index) => item.id}
          />
        </>
      ) : null}
    </>
  );
};
export default SettingFL;
