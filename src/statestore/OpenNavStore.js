import { create } from 'zustand'

const useOpenNavStore = create((set) => ({
  currentstate: false,
  openNav: () => set((state) => ({ currentstate: true })),
  closeNav: () => set({ currentstate: false }),
}))

export default useOpenNavStore;

// const nav = useOpenNavStore((state) => state.nav)
// const openNav = useOpenNavStore((state) => state.openNav)