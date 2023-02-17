import { atom } from 'jotai';

export const promptAtom = atom("");
export const promptResponseAtom = atom("");

export const isFetchingAtom = atom(false);

/*export const promptAtom = atom(*/
  /*(get) => get(_promptAtom),*/
  /*(get, set, value) => {*/
    /*set(_promptAtom, value);*/
  /*}*/
/*);*/

export const promptsAtom = atom([]);
