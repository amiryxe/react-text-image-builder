import { create } from 'zustand'

export const useStore = create((set) => ({
  background: null,
  updateBackground: (bg: any) => set({ background: bg }),
  text: '',
  updateText: (text: string) => set({ text }),
}))
