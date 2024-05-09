import axios, { AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, 
});

const get = async <T>(url: string, params = {}): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('GET request failed:', error);
    throw error;
  }
};

const post = async <T>(url: string, data = {}): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.post(url, data);
    return response.data;
  } catch (error) {
    console.error('POST request failed:', error);
    throw error;
  }
};


export { get, post };
