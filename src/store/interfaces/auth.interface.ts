import { IChallenge } from "./challenge.interface";

export interface IAuth{
  "Id": string,
  "Email": string,
  "Name": string,
  "ImageURL": string,
  "Challenges": IChallenge[],
}
export interface IAuthLogin{
  "Email": string,
  "Password": string,
}