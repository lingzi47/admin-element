import axios from "axios";
let baseURL = window.PLATFROM_CONFIG
console.log(baseURL);
// 配置axios
const instance = axios.create({
    baseURL: 'https://testapi.yujian02.xyz/',
    timeout: 5000
})


export default instance