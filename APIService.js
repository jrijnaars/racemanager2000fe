import axios from 'axios';

const API_URL = 'http://localhost:8080/';

export class APIService {

  constructor() {
  }

  // get -> /cars
  static getAllCars() {
    const url = `${API_URL}/cars/`;

    return axios.get(url).then(response => response.data);
  }

  // post -> /cars
  static createCar(car) {
    const url = `${API_URL}/cars/`;

    try {
      return axios.post(url, car).then(response => response.data)
    } catch (error) {
      return error;
    }
  }
  // post -> /season}
  static createSeason(seasonname) {
    const url = `${API_URL}/createseason/`;
    try {
      return axios.post(url, seasonname).then(response => response.data)
    } catch (error) {
      return error;
    }
  }

  static getAllSeasons() {
    const url = `${API_URL}/seasons`;

    return axios.get(url).then(response => response.data);
  }
}
