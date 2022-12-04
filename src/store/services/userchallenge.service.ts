import { IUserChallenge } from '../interfaces/userchallenge.interface';
import Api from '../Api';

export default {
  async getUserChallenges(userId: string){
    var response = await Api().get('UserChallenge/' + userId);
   
    return response.data as IUserChallenge[];
  },
  async setUserChallenge(userChallenge: IUserChallenge){
    var payload = JSON.stringify(userChallenge)
    var response = await Api().post('UserChallenge/UpdateUserChallenge', payload, {
      headers: {"Content-Type": "application/json"}
    });
    console.log(response.data);
    return response.data;
  },
}
