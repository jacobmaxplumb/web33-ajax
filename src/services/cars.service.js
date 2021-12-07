import axios from "axios"

export const getCars = () => {
    return axios.get('http://localhost:5001/cars').then(res => res.data);
}

export const getCar = id => {
    return axios.get(`http://localhost:5001/cars/${id}`).then(res => res.data);
}

export const updateCar = car => {
    return axios.put(`http://localhost:5001/cars/${car.id}`, car);
}

export const addCar = car => {
    return axios.post('http://localhost:5001/cars', car);
}

export const deleteCar = id => {
    return axios.delete(`http://localhost:5001/cars/${id}`);
}