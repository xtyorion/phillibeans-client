import {ICategory} from "../interfaces/category.interface";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialAuthState = {
  categories: [] as ICategory[]
}

const authSlice=createSlice({
    name:'category',
    initialState:initialAuthState,
    reducers:{
      setCategories(state, action:PayloadAction<ICategory[]>){
        state.categories = action.payload
      },
    }
})
export default authSlice;