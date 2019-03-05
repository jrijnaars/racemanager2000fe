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
  static createCar() {

  }
  // get -> /cars/{id}
  static getCar(id) {

  }
}
