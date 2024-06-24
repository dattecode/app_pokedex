import React from 'react'
import { Text, StyleSheet } from 'react-native'

const TextStyled = ({ children, style, ...props }) => {
  const stylesText = [
    styles.text, 
    style,
    props.color === "primary" && styles.colorPrimary,
    props.color === "secondary" && styles.colorSecondary,
    props.bold && styles.bold,
    props.subHeading && styles.subHeading,
    props.textAlignCenter && styles.textAlignCenter
  ];

  return (
    <Text {...props} style={stylesText}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#404040",
    fontWeight: "400",
  },
  colorPrimary:{
    color: "#EE1D52"
  },
  colorSecondary:{
    color: "#a364ff"
  },
  bold:{
    fontWeight: "bold"
  },
  subHeading:{
    fontSize: 20,
  },
  textAlignCenter:{
    textAlign: "center"
  }
});

export default TextStyled