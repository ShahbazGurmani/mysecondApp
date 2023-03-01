
import * as React from "react";

import { View,Text,StyleSheet } from "react-native";
class app extends React.Component{

  render()
  {
    return(
      
      <View style = {{padding:50}}>
        <Text style = {styles.TextFeild}>Hello Shahbaz!</Text>
          <Text>Hello Shahbaz!</Text>
            <Text>Hello Shahbaz!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  TextFeild:
  {
    margin:20,
    borderWidth:1,
    fontSize:10,
    backgroundColor:'green'
  }
})

export default app;

