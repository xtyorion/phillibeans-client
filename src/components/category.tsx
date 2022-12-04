import { Dispatch, SetStateAction } from "react";
import { HiArrowDown, HiX } from "react-icons/hi";
import { IChallenge } from "../store/interfaces/challenge.interface";
import Challenge from "./challenge";

export default function Category(props: {
    title: string, children: IChallenge[], 
    Id: string, Index: string, 
    setIndex: Dispatch<SetStateAction<string>>,
  }) {
  const handleSetIndex = (Id: string) => props.Index !== Id && props.setIndex(Id);
 
  return (
    <>
      <div
        onClick={() => {handleSetIndex(props.Id)}}
        className="flex group cursor-pointer w-full border-2 border-dark-background 
        dark:border-light-background mx-auto justify-between  items-center p-2 rounded-md 
        bg-white hover:bg-primary hover:shadow-lg text-dark-headline 
        dark:text-light-headline"
      >
        <div className="flex group cursor-pointer">
          <div className=" font-semibold pl-10">
            {props.title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {props.Index !== props.Id ? (
            <HiArrowDown className="w-6 h-6 group-hover:text-dark-headline text-primary"/>
          ) : (
            <HiX className="w-6 h-6 group-hover:text-dark-headline text-primary" onClick={() => handleSetIndex('')}/>
          )}
        </div>
      </div>

      {props.Index === props.Id && (
        <div className="w-full">
          <div className="shadow-md rounded border-2 border-dark-background dark:border-light-background">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-dark-background text-light-headline dark:bg-light-background dark:text-dark-headline uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-left">Problem</th>
                  <th className="py-3 px-6 text-center">Difficulty</th>
                  <th className="py-3 px-6 text-center">Video Solution</th>
                  <th className="py-3 px-6 text-center">Code</th>
                </tr>
              </thead>
              <tbody className="text-dark-headline dark:text-light-headline text-sm font-light">
                {props.children && props.children.map((challenge)=>{return (
                  <Challenge data={challenge} key={challenge.Id} />
                );
                })
                }
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

