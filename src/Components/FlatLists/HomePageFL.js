import React from 'react';
import {Text, FlatList, Image,View,TouchableOpacity} from 'react-native';
import styles from './Style';
import { AntDesign } from '../../Utils/Exports';
import Theme from '../../Utils/Theme';
const HomePageFL = props => {
  const {navigation, HomePageFL, data} = props;
  return (
    <>
      {HomePageFL === true ? (
        <>
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({item}) => {
              return (
                <>
                  <View style={styles.wraptxt}>
                    <Image source={item.img} style={styles.imgDesign} />
                    <Text style={{...styles.txtName,marginTop:'5%'}}>{item.name}</Text>
                    <Text style={styles.txtName}>RM {item.RM}</Text>
                    <TouchableOpacity style={styles.wrapPlus} onPress={()=>alert('Pressed')}>
                      <AntDesign name='plus' color={Theme.white} size={Theme.iconSizeSm}/>
                    </TouchableOpacity>
                  </View>
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
export default HomePageFL;
