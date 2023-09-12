import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


function Categories() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const navigation = useNavigation()

  const fetchData = () => {
    setLoading(true);
    axios.get("https://dummyjson.com/products/categories")
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  const navigateToProducts = (item) => {
    navigation.navigate("Meals", {name:item})
  }
  

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item, index }) => {

    return <TouchableOpacity style={styles.itemContainer} onPress={()=> navigateToProducts(item)}>
      <Text style={styles.title}>{index + 1 + ". " + item}</Text>
    </TouchableOpacity>
  }

  return (
    <View style={styles.container}>

      <FlatList data={data} renderItem={renderItem} />
    </View>
  )
}

export default Categories;