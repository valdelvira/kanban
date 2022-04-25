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
    verify = token => this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
}

const authService = new AuthService()
export default authService
