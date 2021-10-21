import axios from 'axios';
// ipv4 da sua maquina
// ip do backend
export const api = axios.create({
    baseURL: "http://192.168.0.101:4000"
})