import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {ToastAndroid} from 'react-native';

export const apiHandle = axios.create({
  baseURL: 'https://fuzzy-blue-earmuffs.cyclic.app/',
  // baseURL: 'http://localhost:3000/',
});

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('your_token_key');
    return token || '';
  } catch (error) {
    console.error('Error retrieving token:', error);
    return '';
  }
};

apiHandle.interceptors.request.use(async config => {
  const token = await getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const signup = async (userData: any) => {
  try {
    const response = await apiHandle.post('auth/signup', userData);
    const token = response.data.token;

    await AsyncStorage.setItem('your_token_key', token);

    return {token};
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const login = async (credentials: any) => {
  try {
    const response = await apiHandle.post('auth/login', credentials);
    // console.log('Login response:', response);
    ToastAndroid.show('Logged in Successfully', ToastAndroid.SHORT);
    const {token} = response.data.data;

    if (!token) {
      console.error('Error logging in: Token is undefined');
      throw new Error('Token is undefined');
    }

    await AsyncStorage.setItem('your_token_key', token);

    return {token};
  } catch (error: any) {
    if (error.response) {
      // The request was made, but the server responded with a status code
      // Handle different status codes here
      if (error.response.status === 404) {
        console.error('User not found');
      } else if (error.response.status === 401) {
        console.error('Unauthorized access');
      } else {
        console.error('Error logging in:', error);
      }
    } else {
      console.error('Error logging in:', error.message);
    }

    throw error;
  }
};

export const Get = (endpoint: string, id?: string | number) => {
  return apiHandle.get(`${endpoint}/${id || ''}`);
};

export const Post = (
  endpoint: string,
  stateName: any,
  id?: string | number,
) => {
  return apiHandle.post(`${endpoint}/${id || ''}`, stateName);
};

export const Put = (endpoint: string, stateName: any, id?: string | number) => {
  return apiHandle.put(`${endpoint}/${id || ''}`, stateName);
};

export const Delete = (endpoint: string, id?: string | number) => {
  return apiHandle.delete(`${endpoint}/${id || ''}`);
};
