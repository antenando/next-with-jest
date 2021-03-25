import { AsyncAction } from "overmind";
// import {} from "../../services/UserDataService/IUserDataModel";
import { userService } from "../../services/httpServicePool";

export const getUser: AsyncAction = async ({ state }) => {
  state.testingOvermind.loading = true;
  await userService
    .getUser({})
    .then((res: any) => {
      state.testingOvermind.data = res.data;
    })
    .catch((err) => {
      state.testingOvermind.error = err;
    });
  state.testingOvermind.loading = false;
};
