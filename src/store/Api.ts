import axios from 'axios';


export default ()=>{
  const API_URL = import.meta.env.VITE_API_URL
  return axios.create({
      baseURL: API_URL,
  })
}