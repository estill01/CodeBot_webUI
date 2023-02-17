import { atom } from 'jotai';

export const promptAtom = atom("");

/*export const promptAtom = atom(*/
  /*(get) => get(_promptAtom),*/
  /*(get, set, value) => {*/
    /*set(_promptAtom, value);*/
  /*}*/
/*);*/

export const promptsAtom = atom([]);
