import BaseService from "../baseService";
import { IUserDataResponse } from "./IUserDataModel";
import { BASE_URL, PATH_URL } from "../url";

const service = new BaseService(`${BASE_URL.LOCALHOST}`);

export class UserService {
  getUser = ({}): Promise<IUserDataResponse> => {
    return service.getMock(PATH_URL.GET_USER, {});
  };
}

export default UserService;
