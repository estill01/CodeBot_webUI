import { atom } from 'jotai';

// #######################
//  PRIMARY UI STRUCTURES
// #######################

// Side Panel
export const isPanelOpenAtom = atom(true);
export const SIDE_PANEL_SECTIONS= {
  account: "Account",
  configs: "Configure",
  dashboard: "Dashboard",
  marketplace: "Marketplace",
  projects: "Projects",
  settings: "Settings",
}
export const activeSidePanelSectionAtom = atom(SIDE_PANEL_SECTIONS.projects);

// Generator Bar 

// #######################
//  PRIMARY APP STATE 
// #######################

// Code Generation
export const promptAtom = atom("");
export const promptResponseAtom = atom("");

// Data Fetching
export const isFetchingAtom = atom(false);

// #######################
//  API KEYS
// #######################

// OpenAI
export const hasKeyOpenAIAtom = atom(false);
export const keyOpenAIAtom = atom("");


// #######################
//  PROMPT CARDS      
// #######################

// Visibility
export const isVisibleOpenAICardAtom = atom(true);
export const isVisibleCodeBotCardAtom = atom(true);
export const isVisibleMetaMaskCardAtom = atom(true);


