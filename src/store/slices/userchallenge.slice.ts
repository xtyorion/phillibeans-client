import {IUserChallenge} from "../interfaces/userchallenge.interface";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialAuthState = {
  userchallenges: [] as IUserChallenge[]
}

const userchallengeSlice=createSlice({
    name:'userchallenge',
    initialState:initialAuthState,
    reducers:{
      setUserChallenges(state, action:PayloadAction<IUserChallenge[]>){
        state.userchallenges = action.payload
      },
    }
})
export default userchallengeSlice;