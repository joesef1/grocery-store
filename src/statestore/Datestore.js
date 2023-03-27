import  Data from '../Data';
import { create } from 'zustand'

const Datestore = create(() => ({
  currentDatastate: Data
}))



export default Datestore;

// const currentDatastate = Datestore((state) => state.currentDatastate)
