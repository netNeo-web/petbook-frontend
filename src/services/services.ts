import apiService from './apiService';

//CRUD


export const getAllUsers = () => {
  return apiService.get('/users/getAllData');
};

export const getAllUsersParams = (filters: {age?: number, name?: string, pet?: boolean, petType?: string}) => {
  return apiService.get('/users/getAllData', filters);
};


export const createUser = (userData: object) => {
  return apiService.post('/users/create', userData);
};


export const updateUser = (userId: string, userData: object) => {
  return apiService.put(`/users/update/${userId}`, userData);
};


export const deleteUser = (userId: string) => {
  return apiService.delete(`/users/delete/${userId}`);
};
