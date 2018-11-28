import LogService from "./log-service.js";

let _auth = {}
let _ls = new LogService

export default class LogController {
  constructor(auth) {
    _auth = auth
    console.log("controller working");
  }
}