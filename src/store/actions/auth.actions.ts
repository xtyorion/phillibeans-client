import authSlice from '../slices/auth.slice';
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from '../index'
import {IAuth, IAuthLogin} from "../interfaces/auth.interface";
import AuthService from "../services/auth.service";

export const authActions=authSlice.actions

export const loginAuth=(auth: IAuthLogin):ThunkAction<void,RootState,unknown,AnyAction>=>{
  return async(dispatch,getState)=>{  
    const response:IAuth=await AuthService.login(auth);
    dispatch(authActions.setState(response))  
  }
}