import { create } from 'zustand'

const useOpenNavStore = create((set) => ({
  currentstate: false,
  opencart: () => set((state) => ({ currentstate: true })),
  closecart: () => set({ currentstate: false }),
}))

export default useOpenNavStore;