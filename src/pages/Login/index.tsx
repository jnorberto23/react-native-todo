import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../config/colors';
import {useNavigation} from '@react-navigation/native';
import {useAuthStore} from '../../store/AuthStore';

type Nav = {
  navigate: (value: string) => void;
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState(false);

  const login = useAuthStore(state => state.login);

  const handleLogin = () => {
    if (email === 'email' && password === 'senha') {
      login();
    } else {
      setErrorText(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
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
        {errorText && (
          <Text style={styles.errorText}>Email ou senha incorretos</Text>
        )}
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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
  inputContainer: {
    width: '80%',
    marginBottom: 10,
  },
  input: {
    height: 50,
    marginBottom: 20,
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: colors.gray500,
    color: colors.gray100,
    borderColor: colors.gray900,
    borderWidth: 1,
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
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});
