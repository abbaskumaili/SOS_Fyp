import React, {useEffect, useState, useRef,useCallback} from 'react';
import {View, Image, TextInput, Text,TouchableOpacity,ScrollView} from 'react-native';
import {AntDesign} from '../../Utils/Exports';
import styles from './Style';
import Headers from '../../Components/Headers/Headers';
import Carousel from 'react-native-snap-carousel';
import Theme from '../../Utils/Theme';
import HomePageFL from '../../Components/FlatLists/HomePageFL'
const exampleItems = [
  {
    title: 'Item 1',
    text: 'Text 1',
    imgUrl: require('../../Assets/Img1.jpg'),
  },
  {
    title: 'Item 2',
    text: 'Text 2',
    imgUrl: require('../../Assets/Img2.jpg'),
  },
  {
    title: 'Item 3',
    text: 'Text 3',
    imgUrl: require('../../Assets/Img3.jpg'),
  },
  {
    title: 'Item 4',
    text: 'Text 4',
    imgUrl: require('../../Assets/Img4.jpg'),
  },
];

const Home = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const [productsData, setProductsData] = useState([
    {
      id: 1,
      name: 'Banana',
      qty: '1kg',
      RM: '5.90',
      img: require('../../Assets/banana.png'),
    },
    {
      id: 2,
      name: 'Carrot',
      qty: '500g',
      RM: '2.69',
      img: require('../../Assets/carrots.png'),
    },
    {
      id: 3,
      name: 'Apple',
      qty: '1kg',
      RM: '5.90',
      img: require('../../Assets/apple.png'),
    },
    {
      id: 4,
      name: 'Sweet Corn',
      qty: '2pc',
      RM: '5.00',
      img: require('../../Assets/corn.png'),
    },
  ]);
  const ref = useRef(null);

  const renderItem = useCallback(
    ({item, index}) => (
      <TouchableOpacity
        // onPress={() => navigation.navigate('SpecificPostPage', {item: item})}
        style={styles.wrapBgImage}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
          }}
          source={item.imgUrl}
          resizeMode="cover"></Image>
      </TouchableOpacity>
    ),
    [],
  );
  const [search,setSearch]=useState('')
  return (
    <View style={styles.MainView}>
      <Headers tabsHeader={true} />
      {/* Search */}
      <View style={styles.searchWrap}>
        <View style={styles.wrap20}>
          <AntDesign name="search1" color={Theme.black} size={Theme.iconSize} />
        </View>
        <View style={styles.wrap80}>
          <TextInput
            placeholder="Search Recipes, fruits, and vegitables"
            style={styles.txtInp}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapCarosal}>
          <Carousel
            layout={'default'}
            ref={ref}
            data={carouselItems}
            sliderWidth={400}
            itemWidth={260}
            renderItem={renderItem}
            onSnapToItem={index => setActiveIndex(index)}
          />
        </View>
        <Text style={styles.txtFeatue}>Featured Products</Text>
        <View style={styles.wrapFL}>
          <HomePageFL data={productsData} HomePageFL={true} />
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
