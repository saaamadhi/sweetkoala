import axios from 'axios';

const API_URL = 'http://localhost:5000/user/';

// export default function authHeader() {
//   const user = JSON.parse(localStorage.getItem('user'));
//   if (user && user.accessToken) {
//     // for Node.js Express back-end
//     return { 'x-access-token': user.accessToken };
//   } else {
//     return {};
//   }
// }

export const registration = (role, email, password) => {
  return axios.post(API_URL + 'registration', {
    role,
    email,
    password,
  });
};

export const login = (email, password) => {
  return axios.post(API_URL + 'login', {
    email,
    password,
  });
};
