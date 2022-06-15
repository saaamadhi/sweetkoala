import axios from 'axios';

const API_URL = 'http://localhost:5000/admin/';

export const login = (email, password) => {
  return axios.post(API_URL + 'login', {
    email,
    password,
  });
};
