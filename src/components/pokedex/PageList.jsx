import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PageList = ({ HandleChangePage, pages, page, lastPage }) => {
  return (
    <View style={styles.container}>
      {page > 1 && (
        <>
          <Text 
          style={styles.itemPage }
          onPress={() => HandleChangePage(1)}
          >{"<<"}</Text>
          <Text
            style={styles.itemPage}
            onPress={() => HandleChangePage(page - 1)}
          >
            {"<"}
          </Text>
        </>
      )}
      {pages.map((pageI, i) => {
        return (
          <Text
            style={[styles.itemPage, pageI === page && styles.pageOn]}
            key={i}
            onPress={() => HandleChangePage(pageI)}
          >
            {pageI}
          </Text>
        );
      })}
      {
        page < lastPage && (
          <>
            <Text
              style={styles.itemPage}
              onPress={() => HandleChangePage(page + 1)}
            >
              {">"}
            </Text>
            <Text
              style={styles.itemPage}
              onPress={() => HandleChangePage(lastPage)}
            >
              {">>"}
            </Text>
          </>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flexDirection: "row",
    padding: 15,
    gap: 13,
    justifyContent: "center",
  },
  itemPage: {
    backgroundColor: "red",
    padding: 7,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  pageOn:{
    backgroundColor: "blue"
  }
});

export default PageList;
