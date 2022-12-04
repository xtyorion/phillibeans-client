import { IType } from '../interfaces/type.interface';
import Api from '../Api';

export default {
  async getTypes(){
    var response = await Api().get('ChallengeType');
   
    return response.data as IType[];
  },
}
