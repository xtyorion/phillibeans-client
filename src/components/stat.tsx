import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import Container from "./container";

export default function Stat(props : {data: {name: string, count: number, totalCount: number, percentage: number, id: string}}) {
  const [count, setCount] = useState(0)
  const currentUserChallenges=useAppSelector(state=>state.userchallenge.userchallenges);
  const currentCategories=useAppSelector(state=>state.category.categories);
  console.log(props.data.id)

  useEffect(()=>{
    if(currentCategories.length > 0)
    populate();
  },[currentCategories]);

  const populate = () => {
    if(currentCategories.length > 0){
      
      currentCategories.forEach((cat)=>{
        if(cat.Challenges){
          cat.Challenges.forEach((challenge)=>{
            // var isCountable = false;
            // if(currentUserChallenges.find((userChal)=>{userChal.Challenge_Id == challenge.Id})?.Status == true){
            //   isCountable = true;
            // }
            console.log("sd")
            if(challenge.TypeID == props.data.id){
              setCount(prev => (prev + 1))
            }
          })
        }
        
      })
    }
  }

  return (
    <Container >
      <div className="dark:bg-light-background mx-auto border-2 text-dark-headline border-dark-background py-3 px-3 rounded-md w-64 my-4 shadow-xl">
      <div>
          <p className="text-2xl font-semibold my-2">{props.data.name}</p>
          <div className="border-t-2"></div>

          <div className="flex justify-between">
              <div className="my-2">
                  <p className="font-semibold text-3xl mb-2">{count}</p>
              </div>
              <div className="my-1">
                  <p className="font-semibold text-base">Progress</p>
                  <div className="text-base text-gray-400 font-semibold">
                      <p className="bg-secondary">{props.data.percentage}%</p>
                  </div>
              </div>
          </div>
      </div>
      </div>
    </Container>
  );
}
