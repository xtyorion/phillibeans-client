import { useState, useEffect } from 'react'
import Statistics from "../components/statistics";
import Navbar from '../components/navbar';
import ChallengeBoard from '../components/challengeBoard';
import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import {getCategories} from '../store/actions/category.actions';
import {getTypes} from '../store/actions/type.actions';
import { getUserChallenges } from '../store/actions/userchallenge.actions';

export default function Dashboard() {
  const dispatch=useAppDispatch();
  const currentCategory=useAppSelector(state=>state.category);
  const currentUser=useAppSelector(state=>state.auth);
  useEffect(()=>{
    dispatch(getCategories());
    dispatch(getTypes());
    dispatch(getUserChallenges(currentUser.Id));
  },[])


  return (
    <>
    <Navbar />
    <Statistics />
    
    <ChallengeBoard categories={currentCategory.categories}/>
  </>
  )
}
