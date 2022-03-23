import axios from 'axios';
import {API_BASE, MOVIES} from './ApiConstants';

const CallApi = {
  async getMovies() {
    const request = {
      uri: API_BASE + MOVIES,
    };
    const response = await axios.get(request.uri);
    return await response.data;
  },
  async getDetailMovies(id) {
    const request = {
      uri: API_BASE + MOVIES + id,
    };
    const response = await axios.get(request.uri);
    return await response.data;
  },
};

export default CallApi;
