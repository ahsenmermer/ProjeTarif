import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './/style';
import { useNavigation } from '@react-navigation/native';

const Meals = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { name } = route.params;

  const navigation = useNavigation()

  const fetchData = () => {
    setLoading(true);
    axios.get('https://dummyjson.com/products/category/' + name)
      .then((res) => {
        setData(res.data.products)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  
  const NavigateToDetail = (item) => {
    navigation.navigate("Detail", { id: item.id })
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item}) => {

    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => NavigateToDetail(item)} >
        <Image style={styles.image} source={{ uri: item.thumbnail }} />
        <View style={styles.brandContainer}>
          <Text style={styles.title}> {item.brand} </Text>
        </View>
      </TouchableOpacity>

    )

  }

  return (
    <View style={styles.container}>

      <FlatList data={data} renderItem={renderItem} />
    </View>
  )
}

export default Meals;