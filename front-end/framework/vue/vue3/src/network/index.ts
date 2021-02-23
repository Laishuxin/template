import axios from 'axios'

axios.defaults.baseURL =
  process.env.baseURL || process.env.apiUrl || 'http://127.0.0.1:9998/'

axios.interceptors.request.use()

export default axios
