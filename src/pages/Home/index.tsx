import {Image, StyleSheet, View} from 'react-native';
import { colors } from '../../config/colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
       <Image source={require('../../assets/logo.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.gray700,
    height: '100%',
  },
  headerContainer: {
    height: 150,
    backgroundColor: colors.gray900,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 40,
  },
});
