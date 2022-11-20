import { IAuthLogin, IAuth } from '../interfaces/auth.interface';
import Api from '../Api';
import axios from 'axios';

export default {
  // async login (auth: IAuthLogin) {
    
  //   let formData = new FormData();
  //   let Data: IAuth;
  //   formData.append('Email', 'vincent@gmail.com');
  //   formData.append('Password', 'vincent');
  //   const settings = {
  //     method: 'POST',
  //     body: formData,
  //   };
  //   const actualData = await fetch(
  //     API_URL + `Login`, settings
  //   )
  //   .then(response => {return response.json()})
  //   .then(data => {return Data = JSON.parse(data.user)})
  //   .catch(error => console.log("setError"))
  //   .finally(() => console.log("setLoading", Response));
  
  //   console.log(import.meta.env.VITE_API_URL)
  
  // },
  async login(auth: IAuthLogin){
    const formData = new FormData();
    formData.append('Email', auth.Email);
    formData.append('Password', auth.Password);

    var response = await Api().post('Login', formData, {
      transformRequest: () => formData,
    });
    localStorage.setItem("auth", JSON.stringify(response.data));
    return JSON.parse(response.data.user) as IAuth;
  },
}
