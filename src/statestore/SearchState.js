import { create } from 'zustand'

const SearchState = create((set) => ({
  currentSearchState: true,
  normalSearchState: () => set({ currentSearchState: true}),
  activeSearchState: () => set({ currentSearchState:  false}),
}))

export default SearchState();

// const currentSearchState = SearchState((state) => state.currentSearchState)
// const normalSearchState = SearchState((state) => state.normalSearchState)
// const activeSearchState = SearchState((state) => state.activeSearchState)