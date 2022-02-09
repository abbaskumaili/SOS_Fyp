import React from 'react';
import {Text, FlatList, Image,View,TouchableOpacity,ImageBackground} from 'react-native';
import styles from './Style';
import { AntDesign } from '../../Utils/Exports';
import Theme from '../../Utils/Theme';
const CategoryFL = props => {
  const {navigation, CategoryFL, data} = props;
  return (
    <>
      {CategoryFL === true ? (
        <>
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({item}) => {
              return (
                <>
                  <TouchableOpacity
                    style={styles.wrapBtn}
                    onPress={() => alert(item.name)}>
                    <ImageBackground
                      source={item.img}
                      style={styles.imgFoods}
                      imageStyle={{
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 0,
                      }}
                    >
                      <Text style={styles.txtFruitName}>{item.name}</Text>
                      </ImageBackground>
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
export default CategoryFL;
