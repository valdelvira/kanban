import axios from 'axios'

class AuthService {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`,
            withCredentials: true
        })
    }

    signup = (name, email, password) => this.service.post('/signup', { name, email, password })
    login = (email, password) => this.service.post('/login', { email, password })
    logout = () => this.service.get('/logout')
    loggedin = () => this.service.get('/loggedin')
}

const authService = new AuthService()
export default authService
