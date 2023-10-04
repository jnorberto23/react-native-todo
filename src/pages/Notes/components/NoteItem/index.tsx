import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../../config/colors';

interface NoteProps {
  id: string;
  title: string;
}

export default function NoteItem({ title, id }: NoteProps) {
  return (
    <TouchableOpacity style={styles.container} key={id}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray500,
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 15,
    height: 60,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 1,
    color: colors.white,
  },
});
