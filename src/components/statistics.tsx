import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import Container from "./container";
import Stat from "./stat";


export default function Statistics(props : {}) {
  const currentTypes=useAppSelector(state=>state.type.types);
  const [easy, setEasy] = useState({
    name: 'Easy',
    count: 0,
    totalCount: 0,
    percentage: 0,
    id: ''
  });
  const [medium, setMedium] = useState({
    name: 'Medium',
    count: 0,
    totalCount: 0,
    percentage: 0,
    id: ''
  });
  const [hard, setHard] = useState({
    name: 'Hard',
    count: 0,
    totalCount: 0,
    percentage: 0,
    id: ''
  });

  useEffect(()=>{
    if(currentTypes.length > 0){
      currentTypes.forEach((type)=>{
        switch(type.Name){
          case 'Easy': setEasy({...easy, id: type.Id}); break;
          case 'Medium': setMedium({...medium, id: type.Id});break;
          case 'Hard': setHard({...hard, id: type.Id});break;
        }
      })
      console.log(easy)
      console.log(medium)
      console.log(hard)
    }
  },[currentTypes])


  return (
    <Container>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 item-center justify-center">
        <Stat data={easy}/>
        <Stat data={medium}/>
        <Stat data={hard}/>
      </div>
    </Container>
  );
}
