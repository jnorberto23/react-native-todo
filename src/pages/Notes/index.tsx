import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../config/colors';
import {Clipboard} from 'react-native-feather';
import Header from '../../components/Header';
import uuid from 'react-native-uuid';
import NoteItem from './components/NoteItem';

export default function Notes() {

  const notes = [
    {
      id: uuid.v4().toString(),
      title: 'Minha primeira anotação',
    },
    {
      id: uuid.v4().toString(),
      title: 'Comprar leite',
    },
    {
      id: uuid.v4().toString(),
      title: 'Ligar para o médico',
    },
    {
      id: uuid.v4().toString(),
      title: 'Reunião de trabalho',
    },
  ];
 
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView>
        {notes.length ? (
          <FlatList
            data={notes}
            renderItem={({item}) => <NoteItem {...item} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <View style={styles.emptyList}>
            <Clipboard stroke={colors.gray300} width={70} height={70} />
            <Text style={styles.emptyListText}>
              Você ainda não tem anotações cadastradas
            </Text>
            <Text style={styles.emptyListSubText}>
              Crie anotações e organize seus itens a fazer
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
