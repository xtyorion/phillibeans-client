import { IChallenge } from "./challenge.interface"

export interface ICategory{
  "Id": string,
  "Name": string,
  "Challenges" : IChallenge[]
}