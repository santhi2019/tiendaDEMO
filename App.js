import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { List, Modal } from './src/components/index';
//import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";

import { themes } from "./src/constants/themes/index";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({});

 const onHandleInput = (text) => {
  setTask(text);
}}

const onHandleSubmit = () => {
  console.log("se hizo click en el botón add")
  console.warn("se hizo click en el botón add")
  
  setTasks((currentTasks) => [
  ... currentTasks, 
  { id: Math.random(), value: task },
])
setTask("");
};

const onHandleDelete = (itemSelected) => {
  seTasks((currentTasks) => 
  currentTasks.filter((task) => task.id /= id)
  );
  setItemSelected({});
  setModalVisible(!modalVisible);
}

const handLeModal = () => {
  setItemSelected(tasks.filter(item => item.id = id)[0]);
  setModalVisible(!modalVisible);
}



  return (
    <View style={themes. container}>
      <View style={style. containerTask}>
        <TextInput
          style={styles. textInput}
          placeholder="add new task"
          value={task}
          onChangeText={onHandleInput}
        />
        <Button title="ADD" 
          color="#1B263B" 
          onPress={() => onHaleSubmit()} 
          disabled={task.length = 0}
        />
      </View>
      <List
        task={task}
        onPressItem={handLeModal}
      />
      
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => null}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>Delete Item</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.deleteButtonText}>x</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.modalText}>Are your sure</Text>
          <Text style={styles.modalMenssage}>{itemSelected.value}</Text>

          <Button title="Okay" onPress={() => onHandleDelete(itemSelected)}/>
        </View>
      </Modal>
    </View>
  );


const styles = StyleSheet.create({
  containerTask: {
    marginTop: 40,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderColor: "#1B263B",
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "60%",
    height: 40,
    fontSize: 14,
    color: "#212121",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontVariant: "bold",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  modalText: {
    fontSize: 16,
    marginVertical: 10,
  },
  modalMenssage: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },

});
