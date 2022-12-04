import typeSlice from '../slices/type.slice';
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from '../index'
import {IType} from "../interfaces/type.interface";
import TypeService from "../services/type.service";

export const typeActions=typeSlice.actions

export const getTypes=():ThunkAction<void,RootState,unknown,AnyAction>=>{
  return async(dispatch,getState)=>{  
    const response:IType[]=await TypeService.getTypes();
    dispatch(typeActions.setTypes(response))  
  }
}