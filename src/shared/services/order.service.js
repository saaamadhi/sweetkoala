import axios from 'axios';

const API_URL = 'http://localhost:5000/orders/';

// export const getAllProducts = () => axios.get(API_URL + 'products');

export const addOrder = () => axios.post(API_URL + 'newOrder');

// export const getProduct = (field, fieldValue) =>
//   axios.post(API_URL + 'product', { field, fieldValue });
