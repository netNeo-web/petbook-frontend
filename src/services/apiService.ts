import axios from 'axios';

const BackendAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 60000,
});

const apiService = {
  get: (url: string, params?: object) => BackendAPI.get(url, { params }),
  post: (url: string, data: object) => BackendAPI.post(url, data),
  put: (url: string, data: object) => BackendAPI.put(url, data),
  delete: (url: string, params?: object) => BackendAPI.delete(url, { params }),
};

export default apiService;
