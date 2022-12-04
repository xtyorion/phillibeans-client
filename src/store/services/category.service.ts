import { ICategory } from '../interfaces/category.interface';
import Api from '../Api';

export default {
  async getCategories(){
    var response = await Api().get('ChallengeCategory');
   
    return response.data as ICategory[];
  },
}
