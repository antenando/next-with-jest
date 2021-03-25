import axios from "axios";
export default class BaseService {
  _baseUrl: string;
  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  private axios = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
  });

  post<T_RES>(pathUrl: string, spec?: {}): Promise<T_RES> {
    return this.axios.post(`${this._baseUrl}${pathUrl}`, spec);
  }

  getMock<T_RES>(pathUrl: string, spec?: {}): Promise<T_RES> {
    return this.axios.get(`${this._baseUrl}${pathUrl}`);
  }
}
