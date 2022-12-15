import settingSlice from '../slices/setting.slice';
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from '../index'
import {ISetting} from "../interfaces/setting.interface";

export const settingActions=settingSlice.actions

export const SetTheme=(theme: string):ThunkAction<void,RootState,unknown,AnyAction>=>{
  return async(dispatch,getState)=>{  
    console.log(theme, "tege")
    dispatch(settingActions.setTheme(theme))  
  }
}