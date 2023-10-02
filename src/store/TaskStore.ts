import {create} from 'zustand';
import uuid from 'react-native-uuid';

interface ITask {
  id: string;
  title: string;
  isDone: boolean;
}

interface TaskState {
  tasks: ITask[];
  increaseTask: (text: string) => void;
  changeTaskStatus: (id: string, status: boolean) => void;
}

export const useTaskStore = create<TaskState>()(set => ({
  tasks: [],
  increaseTask: (text: string) =>
    set(state => ({
      tasks: [
        ...state.tasks,
        {
          id: uuid.v4().toString(),
          title: text,
          isDone: false,
        },
      ],
    })),
  changeTaskStatus: (id: string, isDone: boolean) =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? {...task, isDone} : task
      ),
    })),
}));
