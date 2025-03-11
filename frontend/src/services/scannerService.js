import API from './api';

export const scanDependencies = async () => {
  const { data } = await API.post('/scanner/scan');
  return data;
};
