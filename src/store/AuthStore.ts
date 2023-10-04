import {create} from 'zustand';
import uuid from 'react-native-uuid';

interface authState {
  isLogged: boolean;
  login: () => void;
}

export const useAuthStore = create<authState>((set) => ({
  isLogged: false, 
  login: () =>
    set(() => ({
      isLogged: true,
    })),
}));