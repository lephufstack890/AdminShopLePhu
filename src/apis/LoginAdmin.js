import axiosService from './../commons/axiosService'
import { API_ENPOINT } from '../constants'

const url = "user_login"

export const getLogin = () => {
    return axiosService.get(`${API_ENPOINT}/${url}`)
}

