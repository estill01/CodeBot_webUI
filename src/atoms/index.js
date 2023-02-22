import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { PAGE } from '../utils';

// #######################
//  PRIMARY UI STRUCTURES
// #######################

// Side Panel
export const isPanelOpenAtom = atom(true);


// #######################
//  PRIMARY APP STATE 
// #######################

// Navigation
export const activePageAtom = atom(PAGE.projects);

// Data Fetching
export const isFetchingAtom = atom(false);

// Code Generation
export const promptAtom = atom("");
export const promptResponseAtom = atom("");


// #######################
//  API KEYS
// #######################

// OpenAI
export const hasKeyOpenAIAtom = atomWithStorage('hasKeyOpenAI', false);
export const keyOpenAIAtom = atomWithStorage('keyOpenAI', "");


// #######################
//  PROMPT CARDS      
// #######################

// Visibility
export const isVisibleOpenAICardAtom = atom(true);
export const isVisibleCodeBotCardAtom = atom(true);
export const isVisibleMetaMaskCardAtom = atom(true);


