import LogController from "./components/log-controller.js";
import AuthService from "./components/auth-service.js";
import AuthController from "./components/auth-controller.js";

let auth = new AuthService()

class App {
  constructor() {
    this.ctrl = {
      authCtrl: new AuthController(auth),
      logCtrl: new LogController(auth)
    }
  }
}
// @ts-ignore
window.app = new App()