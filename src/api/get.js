import axios from 'axios';
export default function get(url, params = {}) {
  return axios.get(url, {
    params: {...params}
  })
}
