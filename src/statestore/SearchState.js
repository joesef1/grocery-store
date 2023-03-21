import { create } from 'zustand'

const SearchState = create((set) => ({
  currentSearchState: true,
  hideinput: () => set({ currentSearchState: true}),
  showinput: () => set({ currentSearchState:  false}),
}))

export default SearchState;

// const currentSearchState = SearchState((state) => state.currentSearchState)
// const showinput = SearchState((state) => state.showinput)
// const hideinput = SearchState((state) => state.hideinput)