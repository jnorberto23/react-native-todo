import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../config/colors';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={colors.gray300}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={colors.gray300}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray700,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    color: colors.blue100,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: colors.gray900,
    backgroundColor: colors.gray500,
    color: colors.gray100,
    marginBottom: 20,
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: colors.blue300,
    borderRadius: 10,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
