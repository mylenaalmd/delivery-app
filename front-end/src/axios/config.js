import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'http://localhost:3001',
});

export default httpRequest;
