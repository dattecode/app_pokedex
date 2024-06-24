import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { getDataByUrl } from "../../utils/apiServices";
import TextStyled from "../../utils/TextStyled";
import { useNavigation } from "@react-navigation/native";

const PokeCard = ({ pokemonUrl }) => {
  const navigation = useNavigation();
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async (url) => {
    try {
      const data = await getDataByUrl(url);
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon(pokemonUrl);
  }, [pokemonUrl]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: pokemon?.sprites?.front_default }}
          style={styles.image}
        />
        <Button
          title="Details"
          onPress={() => navigation.navigate("PokeDetails", { pokemon })}
        />
      </View>
      <View style={styles.dataCont}>
        <TextStyled color={"primary"}>{pokemon?.name}</TextStyled>
        <View style={styles.type}>
          <TextStyled bold>Types</TextStyled>
          {pokemon?.types?.map((type, i) => (
            <TextStyled color={"secondary"} key={i}>
              {type?.type?.name}
            </TextStyled>
          ))}
        </View>
        <View style={styles.stats}>
          <View>
            <TextStyled>
              {pokemon?.stats[0]?.base_stat} {pokemon?.stats[0]?.stat?.name}
            </TextStyled>
            <TextStyled>
              {pokemon?.stats[1]?.base_stat} {pokemon?.stats[1]?.stat?.name}
            </TextStyled>
            <TextStyled>
              {pokemon?.stats[2]?.base_stat} {pokemon?.stats[2]?.stat?.name}
            </TextStyled>
          </View>
          <View>
            <TextStyled>
              {pokemon?.stats[3]?.base_stat} {pokemon?.stats[3]?.stat?.name}
            </TextStyled>
            <TextStyled>
              {pokemon?.stats[4]?.base_stat} {pokemon?.stats[4]?.stat?.name}
            </TextStyled>
            <TextStyled>
              {pokemon?.stats[5]?.base_stat} {pokemon?.stats[5]?.stat?.name}
            </TextStyled>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    gap: 12,
  },
  image: {
    width: 80,
    height: 80,
    backgroundColor: "red",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  type: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  stats: {
    flexDirection: "row",
    gap: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  dataCont: {
    justifyContent: "center",
    alignItems: "center",
    width: "73%",
    paddingVertical: 5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 2,
    borderColor: "black",
  },
});

export default PokeCard;
