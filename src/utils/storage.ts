export const saveInStorage = (storageKey: string, data: string) => {
  sessionStorage.setItem(storageKey, data);
};

export const clearStorage = (storageKey: string) => {
  sessionStorage.removeItem(storageKey);
};
