import React from "react";
import { StyleSheet, FlatList, View, Image, Text } from "react-native";

const style = StyleSheet.create({
  separator: {
    height: 10,
  },
  image: {
    width: 60,
    height: 50,
    margin: 5,
  },
});

const repositories = [
  {
    id: "jaredpalmer.formik",
    fullName: "jaredpalmer/formik",
    description: "Build forms in React, without the tears",
    language: "TypeScript",
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
  },
  {
    id: "rails.rails",
    fullName: "rails/rails",
    description: "Ruby on Rails",
    language: "Ruby",
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
  },
  {
    id: "django.django",
    fullName: "django/django",
    description: "The Web framework for perfectionists with deadlines.",
    language: "Python",
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
  },
  {
    id: "reduxjs.redux",
    fullName: "reduxjs/redux",
    description: "Predictable state container for JavaScript apps",
    language: "TypeScript",
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
  },
];

const ItemSeparator = () => <View style={style.separator}></View>;

const RepositoryLists = () => {
  const InK = (data) => {
    const newNumber = (data / 1000).toFixed(1);
    return newNumber;
  };
  const renderItem = ({ item }) => {
    return (
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            padding: 10,
          }}
        >
          <Image style={style.image} source={{ uri: item.ownerAvatarUrl }} />
          <View style={{ paddingLeft: 20 }}>
            <Text style={{ fontSize: 22 }}>{item.fullName}</Text>
            <Text style={{ color: "grey" }}>{item.description}</Text>
            <Text
              style={{
                margin: 2,
                backgroundColor: "#059fdc",
                borderRadius: 20,
                padding: 10,
                fontSize: 20,
                width: "auto",
              }}
            >
              {item.language}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text>{InK(item.forksCount)}</Text>
          <Text>{InK(item.stargazersCount)}</Text>
          <Text>{item.ratingAverage}</Text>
          <Text>{item.reviewCount}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            paddingLeft: 10,
          }}
        >
          <Text>Forks</Text>
          <Text>Stars</Text>
          <Text>Rating</Text>
          <Text>Reviews</Text>
        </View>
      </View>
    );
  };
  const renderItemTest = ({ item }) => {
    return <Text>item is here {item.title}</Text>;
  };
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default RepositoryLists;
