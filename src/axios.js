import axios from 'axios'

const instance = axios.create({
    baseURL: "https://whatsapp-backend-jevc.herokuapp.com/"
})

export default instance
