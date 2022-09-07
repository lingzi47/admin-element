import axios from "axios";
let baseURL = '/api';
// console.log(baseURL);
// 配置axios
const instance = axios.create({
    baseURL: ' https://y4.wjw.cool/',
    timeout: 5000
})


export default instance