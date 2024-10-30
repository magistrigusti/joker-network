import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { "API-KEY": "3e676cbf-185e-4a54-8cab-f6d23a78e762" },
});

export const usersAPI = {
  async getUsers(currentPage = 2, pageSize = 10) {
    const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  async follow(id) {
    const response = await instance.post(`follow/${id}`);
    return response.data;
  },
  async unfollow(id) {
    const response = await instance.delete(`follow/${id}`);
    return response.data;
  }
};
