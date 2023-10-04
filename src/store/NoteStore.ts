import {create} from 'zustand';
import uuid from 'react-native-uuid';

interface INote {
  id: string;
  title: string;
  text: string;
}

interface NoteState {
  notes: INote[];
  addNote: (text: string, title: string) => void;
  removeNote: (id: string) => void;
}

export const useNoteStore = create<NoteState>()(set => ({
  notes: [],
  addNote: (text: string, title: string) =>
    set(state => ({
      notes: [
        ...state.notes,
        {
          id: uuid.v4().toString(),
          title: title,
          text: text,
        },
      ],
    })),
    removeNote: (id: string) =>
    set(state => ({
      notes: state.notes.filter(note => note.id !== id),
    })),
}));
