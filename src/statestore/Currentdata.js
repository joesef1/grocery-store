import  Data from '../Data';
import { create } from 'zustand'

const Currentdata = create(() => ({
  data: [Data],
}))



export default Currentdata;