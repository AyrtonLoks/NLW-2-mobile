import axios from 'axios';

const api = axios.create({
  //'http://192.168.1.124:3333'
  //'http://kj-h43.ayrtonloks.mobile.exp.direct:3333'
  baseURL: 'http://192.168.1.124:3333'
});

export default api;