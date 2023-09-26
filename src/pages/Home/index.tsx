import {
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

export default function Home() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
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
    </View>
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
});
