import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Image, Text, Button, FlatList } from "react-native";
import client from "./../../api/client";
// import { IMAGENAME } from "./src/image/index";

class ListView extends Component {
    constructor(props) {
	    super(props);
	    this.state = {
		    data:[],
	    };
    }

	componentDidMount() {
		client.get("/").then((response) => {
			this.setState({ data: response.data });
		});
	}

    render() {
    const { data } = this.state;  
    const mytext = "Good Health, good life"
    return (
    <SafeAreaView style={styles.container}>
    <Image
        style={styles.pizzaImage}
        source={ require('./9Health.png') } 
      />
      <Text style={styles.baseText}>NineHealth</Text>
      <Text style={styles.newText}>{mytext}</Text>
      <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
          	<Text style={styles.itemText}>
              {item.pizzeria_name}, {item.city}
            </Text>
          	) }
        />
      <Button
          title="list Item, Click for Details"
          onPress={() => this.props.navigation.navigate("Detail")}
        />
    </SafeAreaView>
    );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    baseText: {
      color: "navy",
      fontSize: 30,
      fontStyle: "italic",
    },
    newText:{
      color: "red",
    },
    pizzaImage: {
      width: 200,
      height: 200,
    },
    itemText: {
        color: "green",
        fontSize: 20,
      }
  })
  

  export default ListView;

