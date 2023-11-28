import React from "react";
import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  main: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  heading:{
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  }
  ,
  subheading:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "gray",
  }
,
  leftView:{
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "left",
    marginLeft: 25,
  }
  ,
  font:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  italicize:{
    fontStyle: "italic",
  },
  input:{
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  button:{
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 50,
    backgroundColor: "lightblue",
  },
  list:{
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 50,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "lightblue",
  }
  ,
  btnText:{
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  radio:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  row:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  column:{
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }
  ,
  textArea:{
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  loginbtn:{
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 50,
    width: 150,
    backgroundColor: "orange",
  
  },
  loginbtnContainer:{
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon:{
    position: "absolute",
    top: 10,
    marginLeft:5
    
  },
  inputContainer:{
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  player:{
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  playerName:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  playerScore:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "gray",
  },
  jbuttonText:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  
});