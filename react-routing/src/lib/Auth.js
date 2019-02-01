class Auth {

  static getToken(){
    return localStorage.get('token')
  }
  static setToken(token){
    localStorage.set('token', token)
  }
}

export default Auth
