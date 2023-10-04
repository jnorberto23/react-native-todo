import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors } from '../../config/colors';
import { Clipboard } from 'react-native-feather';
import ListItem from '../../components/ListItem';
import { useNoteStore } from '../../store/NoteStore';
import Header from '../../components/Header';

export default function Notes() {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const notes = useNoteStore(state => state.notes);
  const addNote = useNoteStore(state => state.addNote);

  const handleChangeText = (text: string) => {
    setText(text);
  };

  const handleTitleChange = (titleText: string) => {
    setTitle(titleText);
  };

  const handleAddTask = () => {
    if (text.trim() !== '') {
      addNote(text, title);
      setText('');
      setTitle('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SafeAreaView>
        {notes.length ? (
          <FlatList
            data={notes}
            renderItem={({ item }) => <ListItem {...item} />}
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