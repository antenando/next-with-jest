import { createOvermindMock } from "overmind";
import { config } from "../";

describe("Actions", () => {
  describe("getPost", () => {
    test("testing getUser from API", async () => {
      const overmind = createOvermindMock(config, {
        /** if we must to pass data to API */
        // api: {
        //   getPost(id) {
        //     return Promise.resolve({
        //       id
        //     })
        //   }
        // }
      });

      await overmind.actions.testingOvermind.getUser();

      expect(overmind.state).toEqual({
        testingOvermind: {
          loading: false,
          data: [
            {
              id: 1,
              first_name: "John",
              last_name: "Doe",
              age: 40,
            },
            {
              id: 2,
              first_name: "Loius",
              last_name: "Doe",
              age: 42,
            },
          ],
          error: "",
        },
      });
    });
  });
});
