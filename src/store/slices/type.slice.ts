import {IType} from "../interfaces/type.interface";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialAuthState = {
  types: [] as IType[]
}

const authSlice=createSlice({
    name:'type',
    initialState:initialAuthState,
    reducers:{
      setTypes(state, action:PayloadAction<IType[]>){
        state.types = action.payload
      },
    }
})
export default authSlice;