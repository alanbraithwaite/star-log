
let _authService = {}

//draw when user is not logged in
function drawUserLogin() {
  console.log('not logged In')
  document.getElementById('auth').innerHTML = `
  <form onsubmit="app.controllers.authController.login(event)">
      <input type="email" name="email" placeholder="email" required>
      <input type="password" name="password" placeholder="password" required>
      <button type="submit">Login</button>
    </form>
    <p onclick="app.controllers.authController.showRegister()">Click to Register</p>
    `

}
//draw when user is logged in
function drawLogout() {
  console.log('logged in')
  document.getElementById('auth').innerHTML = `<button onclick="app.controllers.authController.logout()">logout</button>`

}

function _drawRegistion() {
  document.getElementById('auth').innerHTML = `
  <form onsubmit="app.controllers.authController.register(event)">
      <input type="text" name="username" placeholder="username" required>
      <input type="text" name="name" placeholder="name" required>
      <input type="password" name="password" placeholder="password" required>
      <select name="rank">
        <option value="Captain">Captian</option>
        <option value="Commander">Commander</option>
        <option value="Lieutenant Commander">Lieutenant Commander</option>
        <option value="Lieutenant">Lieutenant</option>
        <option value="Lieutenant Junior Grade">Lieutenant Junior Grade</option>
        <option value="Ensign">Ensign</option>
      </select>
      <button type="submit">Register</button>
    </form>
    <p onclick="app.controllers.authController.showLogin()">Existing User?</p>
    `
}





export default class AuthController {
  constructor(auth) {
    _authService = auth
    _authService.authenticate(drawLogout, drawUserLogin)
  }

  login(event) {
    event.preventDefault();
    let creds = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    _authService.login(creds, drawLogout)
  }
  register(event) {
    event.preventDefault();
    let creds = {
      username: event.target.username.value,
      name: event.target.username.value,
      rank: event.target.username.value,
      password: event.target.password.value
    }
    _authService.register(creds, drawLogout)
  }
  logout() {
    _authService.logout(drawUserLogin)
  }
  showRegister() {
    _drawRegistion()
  }
  showLogin() {
    drawUserLogin()
  }
}