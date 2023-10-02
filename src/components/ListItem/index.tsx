import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Trash2 } from 'react-native-feather';
import { useTaskStore } from '../../store/TaskStore';
import { colors } from '../../config/colors';

interface ItemProps {
  id: string;
  title: string;
  isDone: boolean;
}

export default function ListItem({ title, isDone, id }: ItemProps) {
  const { changeTaskStatus, removeTask } = useTaskStore((state) => ({
    changeTaskStatus: state.changeTaskStatus,
    removeTask: state.removeTask,
  }));
  const [isTaskDone, setIsTaskDone] = useState(isDone);

  useEffect(() => {
    changeTaskStatus(id, isTaskDone);
  }, [isTaskDone]);

  const handleChangeTaskStatus = () => {
    setIsTaskDone((prevState) => !prevState);
  };

  const handleRemoveTask = () => {
    removeTask(id);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.wrapper} onPress={handleChangeTaskStatus}>
        <View
          style={[
            styles.radio,
            isTaskDone ? styles.radioSelected : null,
          ]}
        >
          {isTaskDone === true && (
            <Text style={styles.radioSpan}>✔</Text>
          )}
        </View>
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          isTaskDone ? styles.textWithDecorationLine : null,
        ]}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={handleRemoveTask}>
        <Trash2 stroke="grey" width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray500,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    height: 60,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    flexDirection: 'row',
  },
  radio: {
    width: 25,
    height: 25,
    borderColor: colors.blue300,
    backgroundColor: colors.gray500,
    borderRadius: 20,
    borderWidth: 2,
  },
  radioSelected: {
    borderColor: colors.purple,
    backgroundColor: colors.purple,
  },
  radioSpan: {
    padding: 3,
    fontSize: 9,
    color: colors.white,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  text: {
    width: '75%',
    color: colors.white,
  },
  textWithDecorationLine: {
    color: colors.gray300,
    textDecorationLine: 'line-through',
  },
});