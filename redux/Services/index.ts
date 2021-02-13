import axios from 'axios'
export async function fetchUser():Promise<any> {
  return axios.get('https://randomuser.me/api/');
};


