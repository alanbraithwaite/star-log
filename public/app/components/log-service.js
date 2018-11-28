// @ts-ignore
let _logApi = axios.create({
  baseURL: '/api/log',
  withCredentials: true
})




export default class LogService {
  constructor() {
    console.log('Log Service is working')
  }

}