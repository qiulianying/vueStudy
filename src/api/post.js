import axios from 'axios';
export default function post(url, params = {}) {
  return axios.post(url, {
    ...params,
    timestamp: window.parseInt(new Date().getTime() / 1000, 10)
  })
}
