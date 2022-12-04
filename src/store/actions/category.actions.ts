import categorySlice from '../slices/category.slice';
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from '../index'
import {ICategory} from "../interfaces/category.interface";
import CategoryService from "../services/category.service";

export const categoryActions=categorySlice.actions

export const getCategories=():ThunkAction<void,RootState,unknown,AnyAction>=>{
  return async(dispatch,getState)=>{  
    const response:ICategory[]=await CategoryService.getCategories();
    dispatch(categoryActions.setCategories(response))  
  }
}