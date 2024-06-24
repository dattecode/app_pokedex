import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import TextStyled from "../utils/TextStyled";
import Moves from "../components/pokeDetails/Moves";

const PokeDetails = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.headerDetailsCont}>
            <View style={styles.nameCont}>
              <TextStyled bold color="primary" subHeading>
                {pokemon.name}
              </TextStyled>
              <TextStyled bold color="primary">
                #{pokemon.id}
              </TextStyled>
            </View>
            <Image
              source={{ uri: pokemon.sprites.front_default }}
              style={styles.Image}
            />
          </View>
          <View style={styles.types}>
            <View style={styles.typesCont}>
              <TextStyled bold>Types</TextStyled>
              <View style={styles.itemType}>
                {pokemon.types.map((type) => (
                  <TextStyled key={type.slot} color="secondary" bold>
                    {type.type.name}
                  </TextStyled>
                ))}
              </View>
            </View>
            <View style={styles.typesCont}>
              <TextStyled bold>Skills</TextStyled>
              <View style={styles.itemType}>
                {pokemon.abilities.map((ability) => (
                  <TextStyled key={ability.slot} color="secondary" bold>
                    {ability.ability.name}
                  </TextStyled>
                ))}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.stats}>
          <TextStyled bold subHeading textAlignCenter>
            Stats
          </TextStyled>
          <View style={styles.itemStats}>
            {pokemon.stats.map((stat) => (
              <TextStyled key={stat.stat.name} color="secondary" bold>
                {stat.stat.name}: {stat.base_stat} / 255
              </TextStyled>
            ))}
          </View>
        </View>

        <View style={styles.moves}>
          <TextStyled bold subHeading textAlignCenter>
            Moves
          </TextStyled>
          {pokemon.moves.map((move) => (
            <Moves key={move.move.name} move={move} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  headerDetailsCont: {
    alignItems: "center",
    paddingVertical: 10,
  },
  Image: {
    width: 180,
    height: 180,
  },
  nameCont: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  types: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    borderBottomWidth: 2,
    padding: 10,
  },
  typesCont: {
    flexDirection: "column",
    gap: 5,
    alignItems: "center",
  },
  itemType: {
    gap: 5,
  },
  stats: {
    flexDirection: "column",
    gap: 7,
    borderBottomWidth: 2,
    padding: 10,
  },
  itemStats:{
    alignItems: "center",
    gap: 5,
  },
  moves: {
    padding: 10,
  },
});

export default PokeDetails;
