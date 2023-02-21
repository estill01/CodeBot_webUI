import { atom } from 'jotai';

// Primary UI-Structure Elements
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


// Code Generation
export const promptAtom = atom("");
export const promptResponseAtom = atom("");

// Data Fetching
export const isFetchingAtom = atom(false);

// Config Prompt / Info Cards
export const isVisibleOpenAICardAtom = atom(true);

export const isVisibleOSSCardAtom = atom(true);
export const isVisibleMetaMaskCardAtom = atom(true);

// Keys
export const hasKeyOpenAIAtom = atom(false);
export const keyOpenAIAtom = atom("");

