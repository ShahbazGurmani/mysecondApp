
import * as React from "react";

import { View,Text,StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
class app extends React.Component{

  render()
  {
    return(
      
      <View style = {styles.container}>
        <Text  style = {styles.TextFeild}>Hello Shahbaz!</Text>
          <Text  style = {styles.TextFeild}>Hello Shahbaz!</Text>
            <Text  style = {styles.TextFeild}>Hello Shahbaz!</Text>
             <Text  style = {styles.TextFeild}>Hello Shahbaz!</Text>
            <Text  style = {styles.TextFeild}>Hello Shahbaz!</Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({

  container:
  {
    flex:1,
    backgroundColor:'black',
    padding:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

    
  },

  TextFeild:
  {
    margin:10,
    borderWidth:1,
    fontSize:10,
    backgroundColor:'green',
    padding:10,
    color:'white'
  }
})

export default app;

