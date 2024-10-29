// api/api.js
import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { "API-KEY": "3e676cbf-185e-4a54-8cab-f6d23a78e762" },
});

export const usersAPI = {
  getUsers(currentPage = 2, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  }
};

export const addUsers = (id) => {
  return instance.post(`follow/${id}`).then(response => response.data);
};

export const deleteUsers = (id) => {
  return instance.delete(`follow/${id}`, {}).then(response => response.data);
};