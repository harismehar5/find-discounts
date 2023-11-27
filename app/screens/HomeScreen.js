import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";

const HIGHT = Dimensions.get("screen").height / 4;
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title:
      "Buy One Big Bertha Burger Plate and Receive a FREE Bowl of Berthas Famous Chocolate Ice Cream ",
    image: "https://picsum.photos/200/300",
    discount: "Save $6",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title:
      "Buy One Big Bertha Burger Plate and Receive a FREE Bowl of Berthas Famous Chocolate Ice Cream ",
    image: "https://picsum.photos/200/300",
    discount: "Save $6",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title:
      "Buy One Big Bertha Burger Plate and Receive a FREE Bowl of Berthas Famous Chocolate Ice Cream ",
    image: "https://picsum.photos/200/300",
    discount: "Save $6",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571529d72",
    title:
      "Buy One Big Bertha Burger Plate and Receive a FREE Bowl of Berthas Famous Chocolate Ice Cream ",
    image: "https://picsum.photos/200/300",
    discount: "Save $6",
  },
];

const Item = ({ title, image, discount }) => (
  <View style={styles.item}>
    <Image style={styles.cardImage} source={{ uri: image }} />
    <Text style={styles.title}>{title}</Text>
    <View style={styles.discountStyle}>
      <Text>{discount}</Text>
    </View>
  </View>
);

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            image={item.image}
            discount={item.discount}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    height: HIGHT,
    // padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 0.5,
    borderColor: "#cdcdcd",
    borderRadius: 10,
  },
  cardImage: {
    height: "75%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 14,
    margin: 5,
  },
  discountStyle: {
    position: "absolute",
    right: 0,
    top: 8,
    backgroundColor: "#67D945",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 2.5,
  },
});

export default HomeScreen;
