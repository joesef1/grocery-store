import { create } from 'zustand'

const AddToCart = create((set) => ({
  AddItems: [],


  addtocart: (pro) => set((state) => ({
    ...state,
    AddItems: [...state.AddItems, pro]
  }))
  
  
}))

export default AddToCart;

// const addtocart = AddToCart((state) => state.addtocart)
// const showinput = AddToCart((state) => state.showinput)
// const hideinput = AddToCart((state) => state.hideinput)