import axiosService from '../commons/axiosService'
import { API_ENPOINT } from '../constants'

const url = "cats"

export const getCat = () => {
    return axiosService.get(`${API_ENPOINT}/${url}`)
}

export const addCat = data => {
    return axiosService.post(`${API_ENPOINT}/${url}`, data)
}

export const updateCat = (data, CatId) => {
    return axiosService.put(`${API_ENPOINT}/${url}/${CatId}`, data)
}

export const deleteCat = (catId) => {
    return axiosService.delete(`${API_ENPOINT}/${url}/${catId}`)
}



