import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../config/colors';
import Header from '../../components/Header';
import {useState} from 'react';
import {PlusCircle} from 'react-native-feather';
import ListItem from '../../components/ListItem';
import {useTaskStore} from '../../store/TaskStore';

export default function Home() {
  const tasks = useTaskStore(state => state.tasks);
  const increaseTask = useTaskStore(state => state.increaseTask);
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray300}
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        <TouchableOpacity style={styles.inputButton} onPress={() => increaseTask(text)}>
          <PlusCircle stroke="white" width={16} height={16} />
        </TouchableOpacity>
      </View>
      <View style={styles.tasksInfoContainer}>
        <View style={styles.tasksInfo}>
          <Text style={styles.tasksInfoCreatedText}>Criadas</Text>
          <Text style={styles.tasksBadge}>0</Text>
        </View>
        <View style={styles.tasksInfo}>
          <Text style={styles.tasksInfoDoneText}>Concluídas</Text>
          <Text style={styles.tasksBadge}>0</Text>
        </View>
      </View>

      <SafeAreaView>
        <FlatList
          data={tasks}
          renderItem={({item}) => <ListItem {...item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.gray700,
  },
  inputContainer: {
    top: -20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  input: {
    width: '70%',
    height: 45,
    borderColor: colors.gray900,
    borderRadius: 5,
    backgroundColor: colors.gray500,
    color: colors.gray100,
    paddingLeft: 15,
    paddingRight: 15,
  },
  inputButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 50,
    borderRadius: 5,
    borderColor: colors.gray900,
    backgroundColor: colors.blue300,
    paddingLeft: 15,
    paddingRight: 15,
  },
  tasksInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    paddingLeft: 35,
    paddingRight: 35,
  },
  tasksInfo: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tasksInfoCreatedText: {
    color: colors.blue100,
    fontWeight: 'bold',
  },
  tasksInfoDoneText: {
    color: colors.purple,
    fontWeight: 'bold',
  },
  tasksBadge: {
    backgroundColor: colors.gray400,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 50,
    color: colors.white,
    fontWeight: 'bold',
  },
});
