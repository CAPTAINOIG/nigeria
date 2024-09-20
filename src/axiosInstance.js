// src/axiosConfig.js
import axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: 'https://shopsphere-node.onrender.com',
//     // http://localhost:3000
    
// });


const axiosInstance = axios.create({
    baseURL: 'https://33eb-102-88-84-48.ngrok-free.app/api',
    headers: {
      "ngrok-skip-browser-warning": '69420',
      'Content-Type': 'application/json',
    }
});
export default axiosInstance;
