import { useEffect, useState } from "react";

export default function Checkbox (props: {status: boolean, setChallengeStatus: (status: boolean)=>void}) {
  const [checked, setChecked] = useState(props.status);
  const updateStatus = () => {
    setChecked(!checked); 
    props.setChallengeStatus(!checked)
  }

  return (
    <label>
      <input type="checkbox"
        defaultChecked={checked}
        className="form-check-input h-4 w-4 border border-gray-300 rounded-sm
         bg-white checked:bg-primary checked:border-primary focus:outline-none
          transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain
           float-left mr-2 cursor-pointer"
        onChange={updateStatus}
      />
      {/* <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
    type="checkbox" value={getStatus()} id="flexCheckDefault" defaultChecked={getStatus()}/> */}
    </label>
  );
}