import userchallengeSlice from '../slices/userchallenge.slice';
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from '../index'
import {IUserChallenge} from "../interfaces/userchallenge.interface";
import UserChallengeService from "../services/userchallenge.service";

export const userchallengeActions=userchallengeSlice.actions

export const getUserChallenges=(userId: string):ThunkAction<void,RootState,unknown,AnyAction>=>{
  return async(dispatch,getState)=>{  
    const response:IUserChallenge[]=await UserChallengeService.getUserChallenges(userId);
    dispatch(userchallengeActions.setUserChallenges(response))  
  }
}

export const setUserChallenge=(userChallenge: IUserChallenge):ThunkAction<void,RootState,unknown,AnyAction>=>{
  return async(dispatch,getState)=>{  
    const response:IUserChallenge[]=await UserChallengeService.setUserChallenge(userChallenge);
    dispatch(getUserChallenges(userChallenge.User_Id))  
  }
}