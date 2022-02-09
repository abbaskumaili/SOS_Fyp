import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {auth} from '../../Utils/Exports'
import styles from './Style';
import Headers from '../../Components/Headers/Headers';
import CategoryFL from '../../Components/FlatLists/CategoryFL';
const Categories = ({ navigation }) => {
    const [categoryData, setCategoryData] = useState([
      {
        id: 1,
        name: 'Fresh Produce',
        img: require('../../Assets/Img1.jpg'),
      },
      {
        id: 2,
        name: 'Beverages',
        img: require('../../Assets/Img2.jpg'),
      },
      {
        id: 3,
        name: 'Meat & Fish',
        img: require('../../Assets/Img3.jpg'),
      },
      {
        id: 4,
        name: 'Organic Snacks',
        img: require('../../Assets/Img1.jpg'),
      },
      {
        id: 5,
        name: 'Dairy',
        img: require('../../Assets/Img2.jpg'),
      },
      {
        id: 6,
        name: 'Health & Home',
        img: require('../../Assets/Img3.jpg'),
      },
    ]);
  return (
    <View style={styles.MainView}>
      <Headers tabsHeader={true} />
      <Text style={styles.txtCategory}>Categories</Text>
      <View style={styles.wrapFL}>
        <CategoryFL
          data={categoryData}
          CategoryFL={true}
          navigation={navigation}
        />
      </View>
    </View>
  );
};
export default Categories;
