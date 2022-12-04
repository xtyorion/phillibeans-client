import { IChallenge } from "../store/interfaces/challenge.interface";
import {FaPhotoVideo, FaCode} from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import Checkbox from "./checkbox";
import { IUserChallenge } from "../store/interfaces/userchallenge.interface";
import {setUserChallenge} from "../store/actions/userchallenge.actions"
import PopupWidget from "./popupWidget";

export default function Challenge(props: {data: IChallenge}) {
const currentType=useAppSelector(state=>state.type);
const currentUserChallenges=useAppSelector(state=>state.userchallenge.userchallenges);
const currentUser = useAppSelector(state => state.auth);

const dispatch=useAppDispatch();

const setChallengeStatus = (status: boolean) => {
  console.log("props", props.data)
  var userChallenge: IUserChallenge = {
    Status: status,
    Challenge_Id: props.data.Id,
    User_Id: currentUser.Id,
    _id: currentUserChallenges.find(e => e.Challenge_Id === props.data.Id)?._id ?? "",
  }

  dispatch(setUserChallenge(userChallenge));
}

const getStatus = () =>{
  let retval = false
 
  if(currentUserChallenges){
    return currentUserChallenges.find(e => e.Challenge_Id === props.data.Id)?.Status ?? false
  }
  return retval;
}

const getType = () => {
  let retval = ''
  if(currentType.types){
    return currentType.types.find(e => e.Id === props.data.TypeID)?.Name
  }
  return retval;
}

return (
  <tr className="border-b border-dark-background dark:border-light-background" key={props.data.Id}>
    <td className="py-3 px-6 text-left">
    <Checkbox status={getStatus()} setChallengeStatus={setChallengeStatus}/>
    
    </td>
    <td className="py-3 px-6 text-left whitespace-nowrap">
      <div className="flex items-center">
        <span className="font-medium">{props.data.Name}</span>
      </div>
    </td>
    <td className="py-3 px-6 text-center">
      <span className="bg-primary py-1 px-3 rounded-full text-xs">
      {getType()}
      </span>
    </td>
    <td className="py-1 px-6 text-center ">
      <PopupWidget data="https://www.youtube.com/embed/1MdKNayVd7g" icon={<FaPhotoVideo size={25}/>} type="video"/>
    </td>
    <td className="py-3 px-6 text-center">
    <FaCode size={25} className="mx-auto"/>
    </td>
  
  </tr>
);

}