export interface IUserDataResponse {
  data: {
    results: IData;
  };
}

interface IData {
  id: number;
  first_name: string;
  last_name: string;
  age: string;
}
