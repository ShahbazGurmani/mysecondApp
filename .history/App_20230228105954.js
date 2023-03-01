
import * as React from "react";

import { View,Text,StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
class app extends React.Component{

  render()
  {
    return(
      
      <View style = {{padding:50}}>
        <Text  style = {styles.TextFeild}>Hello Shahbaz!</Text>
          <Text  style = {styles.TextFeild}>Hello Shahbaz!</Text>
            <Text  style = {styles.TextFeild}>Hello Shahbaz!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  TextFeild:
  {
    margin:10,
    borderWidth:1,
    fontSize:10,
    backgroundColor:'green',
    padding:10,
    Color:'white'
  }
})

export default app;

