import {Image, StyleSheet, View} from 'react-native';
import { colors } from '../../config/colors';

export default function Header() {
  return (
      <View style={styles.container}>
       <Image source={require('../../assets/logo.png')} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: colors.gray900,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 35,
  },
});
