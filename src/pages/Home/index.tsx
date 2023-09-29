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

const TODO_LIST = [
  {
    id: '1a6e82ff-71ed-4e4f-9d4a-932a544e2632',
    title: 'Comprar mantimentos',
  },
  {
    id: 'b2d98a6c-8454-4c7c-8c3f-d74f88eac2b1',
    title: 'Lavar o carro',
  },
  {
    id: '9f3d2e45-6824-4e3f-8a3a-527fb7b8d16e',
    title: 'Estudar para o exame',
  },
  {
    id: 'f8a95187-6033-42e7-862e-501a7e8a4c12',
    title: 'Marcar consulta médica',
  },
  {
    id: 'c2e1f6a1-4917-4a4d-aa3d-817c5c84bb82',
    title: 'Pagar as contas',
  },
  {
    id: '67e7b123-9a15-493f-8e9b-9b41ccfde8a2',
    title: 'Fazer exercícios',
  },
  {
    id: 'a8f5d239-7d3a-4ec6-8bbd-4266e1a755d1',
    title: 'Assistir a um filme',
  },
  {
    id: '4e1898d1-0e54-4a29-860c-c76823fcfaac',
    title: 'Limpar a casa',
  },
  {
    id: '8c32b9ca-d7ca-4a6a-9d23-f3f7d8b8e7f9',
    title: 'Preparar o jantar',
  },
  {
    id: '72c4457d-0f7a-4e0c-a832-e977e1713a9d',
    title: 'Fazer a lista de compras',
  },
  {
    id: 'bb1f29e4-72d9-4b0c-9d7a-452c3b9722d7',
    title: 'Consertar a torneira vazando',
  },
  {
    id: 'a5f9828a-96b5-493d-a1c7-9286b19cf5a1',
    title: 'Planejar as férias',
  },
  {
    id: 'e63a40c9-60e6-4b12-b6c9-64c472944019',
    title: 'Organizar o escritório',
  },
];

export default function Home() {
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
        <TouchableOpacity style={styles.inputButton} onPress={() => {}}>
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
            data={TODO_LIST}
            renderItem={({item}) => <ListItem title={item.title} />}
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
  }
});
