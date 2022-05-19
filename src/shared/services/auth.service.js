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

const login = (role, email, password) => {
  return axios.post(API_URL + 'login', {
    role,
    password,
  });
  // .then((response) => {
  //   if (response.data.accessToken) {
  //     localStorage.setItem('user', JSON.stringify(response.data));
  //   }
  //   return response.data;
  // });
};

const logout = () => {
  localStorage.removeItem('user');
};
