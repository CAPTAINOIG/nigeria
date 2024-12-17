// src/axiosConfig.js
import axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: 'https://shopsphere-node.onrender.com',
//     // http://localhost:3000
    
// });


const axiosInstance = axios.create({
    baseURL: 'https://blockchain.creditclan.com/memo/api',
    headers: {
      "ngrok-skip-browser-warning": '69420',
      'Content-Type': 'application/json',
    }
});
export default axiosInstance;
