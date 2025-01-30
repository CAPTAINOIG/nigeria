// src/axiosConfig.js
import axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: 'https://shopsphere-node.onrender.com',
//     // http://localhost:3000
    
// });


const axiosInstance = axios.create({
    baseURL: 'https://lendnode.creditclan.com/memo/api',
    // baseURL: 'https://4478-2a09-bac5-4dd3-6d2-00-ae-1b.ngrok-free.app/api',
    headers: {
      "ngrok-skip-browser-warning": '69420',
      'Content-Type': 'application/json',
    }
});
export default axiosInstance;
