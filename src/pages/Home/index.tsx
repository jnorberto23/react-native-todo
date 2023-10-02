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
import {Clipboard, PlusCircle} from 'react-native-feather';
import ListItem from '../../components/ListItem';
import {useTaskStore} from '../../store/TaskStore';

export default function Home() {
  const [text, setText] = useState('');
  const tasks = useTaskStore(state => state.tasks);
  const addTask = useTaskStore(state => state.addTask);
  const tasksDoneCount = useTaskStore
    .getState()
    .tasks.filter(task => task.isDone).length;
  const tasksCount = useTaskStore.getState().tasks.length;

  const handleChangeText = (text: string) => {
    setText(text);
  };

  const handleAddTask = () => {
    if (text.trim() !== '') {
      addTask(text);
      setText('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray300}
          onChangeText={handleChangeText}
          defaultValue={text}
        />
        <TouchableOpacity style={styles.inputButton} onPress={handleAddTask}>
          <PlusCircle stroke="white" width={16} height={16} />
        </TouchableOpacity>
      </View>
      <View style={styles.tasksInfoContainer}>
        <View style={styles.tasksInfo}>
          <Text style={styles.tasksInfoCreatedText}>Criadas</Text>
          <Text style={styles.tasksBadge}>{tasksCount}</Text>
        </View>
        <View style={styles.tasksInfo}>
          <Text style={styles.tasksInfoDoneText}>Concluídas</Text>
          <Text style={styles.tasksBadge}>{tasksDoneCount}</Text>
        </View>
      </View>

      <SafeAreaView>
        {tasks.length ? (
          <FlatList
            data={tasks}
            renderItem={({item}) => <ListItem {...item} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <View style={styles.emptyList}>
            <Clipboard stroke={colors.gray300} width={70} height={70} />
            <Text style={styles.emptyListText}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyListSubText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
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
  emptyList: {
    marginRight: 35,
    marginLeft: 35,
    marginTop: 15,
    paddingTop: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    borderTopWidth: 1,
    borderTopColor: colors.gray200,
  },
  emptyListText: {
    color: colors.gray300,
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyListSubText: {
    color: colors.gray300,
    fontSize: 14,
  },
});
