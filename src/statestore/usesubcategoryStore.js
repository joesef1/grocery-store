import {create} from 'zustand';
import Data from '../Data';
// import { data } from 'autoprefixer';

const usesubcategoryStore = create((set, get) => ({
  // originalData: [Data],
  data: [],
  // setOriginalData: (originalData) => set({ originalData }),
  // setData: (data) => set({ data }),
  filtercategory: (category) => {
    const result = Data.filter((item) => item.category === category);
    set({ data: result });
    // console.log(result);
  },
  filterSubcategory: (subcategory) => {
    const subcategoryresult = Data.filter((item) => item.subcategory === subcategory);
    set({ data: subcategoryresult });
  },
}));

export default usesubcategoryStore;
