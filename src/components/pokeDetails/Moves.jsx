import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getDataByUrl } from "../../utils/apiServices";
import TextStyled from "../../utils/TextStyled";

const Moves = ({ move }) => {
  const [moveData, setMoveData] = useState(null);
  const [onMove, setonMove] = useState(true)

  const getDataMoves = async (url) => {
    try {
      const data = await getDataByUrl(url);
      setMoveData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataMoves(move.move.url);
  }, []);

  return (
    <>
      {
        onMove && 
        <View style={styles.container}>
          <TextStyled bold color="primary" subHeading>
            {moveData?.name}
          </TextStyled>
          <View style={styles.contSubHead}>
            <TextStyled bold>name :{moveData?.type.name}</TextStyled>
            <TextStyled>id :{moveData?.id}</TextStyled>
          </View>
          <View style={styles.contStats}>
            <TextStyled color="secondary">pp: {moveData?.pp}</TextStyled>
            <TextStyled color="secondary">power :{moveData?.power}</TextStyled>
            <TextStyled color="secondary">
              accuracy :{moveData?.accuracy}
            </TextStyled>
          </View>
          <TextStyled bold>
            damage class: {moveData?.damage_class.name}
          </TextStyled>
        </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 15,
    gap: 3,
  },
  contSubHead: {
    flexDirection: "row",
    gap: 50,
    marginBottom: 5,
  },
  contStats: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 5,
  },
});

export default Moves;
