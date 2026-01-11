import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [userInput, setUserInput] = useState("");
  const [task, setTask] = useState([]);


  return (
    <View style={styles.container}>
    {/* HEADING */}
      <Text style={styles.heading}>TODO_WORKS</Text>
      
    

    {/*Input area*/}
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder='Insert Task'
        style={styles.TextInput}
        onChangeText={(text) => setUserInput(text)}
        value={userInput}
       />

       <Button 
       style={styles.button}
       title='INSERT'
       onPress={() => {
        setTask([...task, userInput])
        setUserInput('');
       }}
        />
    </View>
    <View style={styles.tasksContainer}>
     {task.map((task, index) => (
      <Text style={styles.Task} key={index}>{task}</Text>
     ))}
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(117, 27, 0)',
    alignItems: 'center',
  },

  heading: {
    fontSize: 44,
    fontWeight: '700',
    color: 'rgb(12, 202, 255)',
    marginTop: 45,
  },

  TextInput: {
    borderWidth: 1,
    borderColor: 'rgb(100, 250, 0)',
    width: '80%',
    height: 40,
    paddingLeft: 10,
    borderRadius: 5,
  },

  inputContainer: {
    flexDirection: 'row',
    width: '95%',
  },

  button: {
    marginLeft: 10,
    backgroundColor: 'rgba(38, 1, 119, 0.37)',
    borderColor: 'rgb(255, 204, 0)',
  },

  tasksContainer: {
    marginTop: 30,
    width: '95%',
    backgroundColor: '#c9c9c9ff',
    flex: 1,
  },

  Task: {
    borderColor: "rgba(197, 74, 8, 0.7)",
    fontSize: 23,
  }

});