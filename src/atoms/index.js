import { atom } from 'jotai';

export const promptAtom = atom("");
export const promptResponseAtom = atom("");

export const isFetchingAtom = atom(false);
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

/*export const promptAtom = atom(*/
  /*(get) => get(_promptAtom),*/
  /*(get, set, value) => {*/
    /*set(_promptAtom, value);*/
  /*}*/
/*);*/

export const promptsAtom = atom([]);
