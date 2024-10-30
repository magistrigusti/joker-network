import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { "API-KEY": "3e676cbf-185e-4a54-8cab-f6d23a78e762" },
});

const instanceNews = axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines',
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
  },
  async getProfile(userId) {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },
  
};

export const newsAPI = {
  async getNews(currentPage = 1, pageSize = 3) {
    const response = await instanceNews.get(``, {
      params: {
        country: 'us',
        category: 'business',
        apiKey: '17c01414365e4e76a4a03eedc855029d',
        page: currentPage,
        pageSize: pageSize,
      },
    });
    return response.data;
  }
};

export const authAPI = {
  authMe() {
    const response = instance.get('auth/me');
    return response.data;
  }
}
