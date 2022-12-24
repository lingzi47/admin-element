import axios from "axios";
let baseURL = window.PLATFROM_CONFIG

// 配置axios
const instance = axios.create({
    baseURL: 'https://yujian02.xyz/',
    timeout: 5000
})


export default instance