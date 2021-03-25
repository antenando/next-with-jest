export const env = process.env.NEXT_PUBLIC_ENV;
const API_URL = {
  DEV: {
    LOCALHOST: "http://localhost:8080/api",
  },
};

export const API_PATH_URL = {
  GET_USER: "/users",
};

export const BASE_URL = API_URL.DEV;

export const PATH_URL = API_PATH_URL;
