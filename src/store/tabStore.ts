import { create } from 'zustand';

type Tab = 'projects' | 'experience' | 'education';

interface TabState {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const initialState: TabState = {
    activeTab: 'projects',
    setActiveTab: () => {}, // this will be overridden below
  };

export const useTabStore = create<TabState>((set) => ({
    ...initialState,
  activeTab: 'projects',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));