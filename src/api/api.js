import axios from "axios";

// Подключаем API ключ из .env файла
const apiKey = process.env.REACT_APP_API_KEY;

// Инициализируем основной инстанс Axios с заголовками и базовым URL
const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 
    "API-KEY": "3e676cbf-185e-4a54-8cab-f6d23a78e762",
    "Authorization": apiKey ? `Bearer ${apiKey}` : ""
  }
});

instance.interceptors.request.use(function (config) {
  config.headers["Authorization"] = "Bearer " + localStorage.getItem("sn-token");
  return config; // добавь return
});


// Создаём отдельный инстанс для работы с API новостей
const instanceNews = axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines',
});

// Функции usersAPI для работы с пользователями
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
    if (!userId) {
      console.error("Error: userId is missing for getProfile request.");
      return;
    }
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },
};

// Функции newsAPI для работы с новостями
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
  async authMe() {
    try {
      const response = await instance.get(`auth/me`);
      return response.data;
    } catch (error) {
      console.error("Ошибка авторизации:", error.response ? error.response.data : error.message);
      throw error; // перекиньте ошибку выше
    }
  }
  
  
}


console.log("Текущий токен:", localStorage.getItem("sn-token"));
