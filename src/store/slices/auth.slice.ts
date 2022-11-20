import {IAuth} from "../interfaces/auth.interface";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialAuthState = {
  "Id": "",
  "Email": "",
  "Name": "",
  "ImageURL": "",
  "Challenges": []
} as IAuth

const authSlice=createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
      setState(state, action:PayloadAction<IAuth>){
        return action.payload
      },
    }
})
export default authSlice;