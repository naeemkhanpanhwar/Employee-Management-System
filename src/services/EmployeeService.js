import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/employees';

export const ListEmployees = () => {
    return axios.get(EMPLOYEE_API_BASE_URL)
}

export const AddEmployee = (employee) => {
    return axios.post(EMPLOYEE_API_BASE_URL, employee)
}

export const GetEmployee = (id) => {
    return axios.get(EMPLOYEE_API_BASE_URL + '/' + id)
}

export const UpdateEmployee = (id, employee) => {
    return axios.put(EMPLOYEE_API_BASE_URL + '/' + id, employee)
}

export const DeleteEmployee = (id) => {
    return axios.delete(EMPLOYEE_API_BASE_URL + '/' + id)
}