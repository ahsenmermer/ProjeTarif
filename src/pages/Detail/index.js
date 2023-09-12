import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './style';

const Detail = ({ route }) => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const { id } = route.params;

  const fetchData = () => {
    setLoading(true);
    axios.get('https://dummyjson.com/products/' + id)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>

        <Image style={styles.image} source={{ uri: data?.thumbnail }} />
        <Text style={styles.title}>{data?.title}</Text>
        <Text style={styles.brand}>{data?.brand}</Text>
      <View style={styles.innerContainer}/>

        <Text style={styles.desc}>{data?.description}</Text>
    </View>
  )
}

export default Detail;