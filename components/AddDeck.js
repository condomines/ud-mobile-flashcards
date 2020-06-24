import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

function AddDeck () {

	const [value, onChangeText] = React.useState();

	return (
		<View 
			style={styles.container}>
			<Text style={styles.title}>What is the title of your new deck?</Text>
		    <TextInput style={styles.textInput}
		      onChangeText={text => onChangeText(text)}
		      value={value}
		      placeholder='Enter deck title'
		    />
		    <TouchableOpacity style={styles.btn}
	          onPress={() => alert('Submit pressed')} >
	        	<Text style={{color: 'white'}}>Submit</Text>
	        </TouchableOpacity>
		</View>
		)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'stretch',
    marginTop: 10
  },
  title: {
  	fontSize: 20,
  	color: '#000',
  	padding: 10
  },
  textInput: {
  	height: 40, 
  	borderColor: 'gray', 
  	borderWidth: 1,
  	padding: 10,
  	margin: 10
  },
  btn: {
  	flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 16,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
  	},
  },
})

export default AddDeck
