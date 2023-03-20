import { create } from 'zustand'

const useOpenNavStore = create((set) => ({
  nav: false,
  openNav: () => set((state) => ({ nav: true })),
  closeNav: () => set({ nav: false }),
}))

export default useOpenNavStore;

// const nav = useOpenNavStore((state) => state.nav)
// const openNav = useOpenNavStore((state) => state.openNav)