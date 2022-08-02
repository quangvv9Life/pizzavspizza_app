import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Image, Text, Button } from "react-native";
// import { IMAGENAME } from "./src/image/index";

class ListView extends Component {
	render() {
	  const mytext = "Good health, good life !";
	  return (
	    <SafeAreaView style={styles.center}>
	      <Image
        	style={styles.pizzaImage}
        	source={require('./9Health.png')  }
	      />
	      <Text style={styles.baseText}>9Health</Text>
	      <Text style={styles.newText}>{mytext}</Text>
	      <Text style={styles.title}>List View</Text>
	      <Button 
	      	title="list Item, Click for Details"
	      	onPress= {() => this.props.navigation.navigate("Detail")}
	      />
	    </SafeAreaView>
	  );
	}
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 36,
		marginBottom: 16,
	},
	baseText: {
        color: "navy",
        fontSize: 40,
        //fontStyle: "italic",
    },
    newText: {
        color: "red",
        fontStyle: "italic",
        fontSize: 20
    },
    Pizzaimage: {
        width: 200,
        height: 200,
    },  
});

export default ListView;