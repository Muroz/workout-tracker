import { useEffect } from 'react';
import { saveInStorage } from 'utils/storage';

interface PersistFormHookArgs<T> {
  value: T;
  storageKey: string;
}

const usePersistForm = <T>({ value, storageKey }: PersistFormHookArgs<T>) => {
  useEffect(() => {
    saveInStorage(storageKey, JSON.stringify(value));
  }, [value, storageKey]);
  return;
};

export default usePersistForm;
