import axios from 'axios'

class AuthService {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`,
            withCredentials: true
        })
    }

    signup = credentials => this.service.post('/signup', credentials)
    login = credentials => this.service.post('/login', credentials)
    logout = () => this.service.get('/logout')
    loggedin = () => this.service.get('/loggedin')
}

const authService = new AuthService()
export default authService
