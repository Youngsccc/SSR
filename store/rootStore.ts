import userStore from './userStore';
import { UserStore } from './types/user';

export interface RootStore {
  user: UserStore;
}

export default function createStore(initialValue: any): () => RootStore {
  return () => {
    return {
      user: {
        ...userStore(),
        ...initialValue?.user,
      },
    };
  };
}
