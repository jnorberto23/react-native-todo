import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../config/colors';
import {useEffect, useState} from 'react';
import { Trash2 } from 'react-native-feather';
import { useTaskStore } from '../../store/TaskStore';

interface ItemProps {
  id: string,
  title: string,
  isDone: boolean
}

export default function ListItem({title, isDone, id}: ItemProps) {
  const changeTaskStatus = useTaskStore(state => state.changeTaskStatus);
  const [isSelected, setIsSelected] = useState(isDone);

  useEffect(() => {
    changeTaskStatus(id, isSelected)
  }, [isSelected])

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => setIsSelected(prevState => !prevState)}>
        {isSelected === true ? (
          <View style={styles.radioSelected}>
            <Text style={styles.radioSpan}>✔</Text>
          </View>
        ) : (
          <View style={styles.radio} />
        )}
      </TouchableOpacity>
      <Text style={isSelected ? styles.textWithDecorationLine : styles.text}>{title}</Text>
      <TouchableOpacity >
        <Trash2 stroke="grey" width={20} height={20} />
      </TouchableOpacity >
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
    width: 25,
    height: 25,
    borderColor: colors.purple,
    backgroundColor: colors.purple,
    borderRadius: 20,
    borderWidth: 2,
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
    width: '75%',
    color: colors.gray300,
    textDecorationLine: 'line-through',
  },
});
