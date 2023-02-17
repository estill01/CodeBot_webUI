import { atom } from 'jotai';


const _promptAtom = atom(
  { prompt: '', response: '' }
);
export const promptAtom = atom(
  (get) => get(_promptAtom),
  (get, set, value) => {
    set(_promptAtom, value);
  }
);

export const promptsAtom = atom([]);
