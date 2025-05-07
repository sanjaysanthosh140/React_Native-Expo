import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { format } from "date-fns";

const data = () => {
const [searchQuery, setSearchQuery] = useState('');
  const [work, setwor] = useState([]);
  const [data, setdata] = useState({
    id: "",
    work: "",
    itemstamp:""
  });
  const currentTime = format(new Date(), 'h:mm a, MMM d, yyyy');
  const handleChnage = (text, key) => {
    const intex = work.length + 1;
    setdata({
      ...data,
      id: intex,
      itemstamp:currentTime,
      [key]: text,
    });
  };
 


  const delete_one = (id) => {
    const new_data = work.filter((item) => item.id !== id);
    if (new_data) {
      setwor(new_data);
    }
      showMessage({
        message: "one item is removed",
        type: "info",
        icon: "info",
      });
  };
  const handleSub = () => {
    if (data.work.trim() === "") {
      showMessage({
        message: "input field is empty",
        type: "danger",
        icon: "danger",
      });
    } else {
      showMessage({
        message: "New task added",
        type: "success",
        icon: "success",
      });
      setwor([...work, data]);
      setdata({
        work: "",
      });
    }
  };


  return (
    <>
      <FlashMessage position="center" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Task Manager</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={data.work}
            onChangeText={(text) => handleChnage(text, "work")}
            placeholder="Enter your task"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.addButton} onPress={handleSub}>
            <MaterialIcons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.taskListContainer}>
          <Text style={styles.sectionTitle}>Your Tasks</Text>
          {work.length === 0 ? (
            <Text style={styles.emptyMessage}>No tasks yet. Add some!</Text>
          ) : (
            work.map((item, index) => (
              <View key={index} style={styles.taskItem}>
                <Text style={styles.taskNumber}>{index + 1}.</Text>
                <Text style={styles.taskText}>{item.work}</Text>
                <Text style={{paddingTop:4,marginRight:4}}>{item.itemstamp}</Text>
                <Button onPress={() => delete_one(item.id)} title="Delete" />
              </View>
            ))
          )}
        </View>
      </View>
    </>
  );
};

export default data;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 30,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    
searchIcon: {
  marginRight: 10,
},
searchInput: {
  flex: 1,
  padding: 15,
  fontSize: 16,
},
clearButton: {
  padding: 5,
},
  },
  searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
  borderRadius: 10,
  backgroundColor: 'white',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 2,
  paddingHorizontal: 10,
},
searchIcon: {
  marginRight: 10,
},
searchInput: {
  flex: 1,
  padding: 15,
  fontSize: 16,
},
clearButton: {
  padding: 5,
},
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  taskListContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  taskItem: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  taskNumber: {
    fontWeight: "bold",
    marginRight: 10,
    color: "#4CAF50",
  },
  taskText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  emptyMessage: {
    textAlign: "center",
    color: "#888",
    marginTop: 20,
    fontStyle: "italic",
  },
});
