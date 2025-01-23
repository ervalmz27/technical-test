import axios from "axios";
const Apis = axios.create();
Apis.defaults.baseURL = process.env.NEXT_APP_API_BASE_URL || 'http://localhost:4000/api';
let token: string | null = null;
if (typeof window !== "undefined") {
  token = window.localStorage.getItem("token");
  if (token) {
    Apis.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}
Apis.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response !== undefined) {
      if (error.response.status === 403) {
        window.localStorage.removeItem("token");
        delete Apis.defaults.headers.common.Authorization;
        window.location.reload();
      }
    }
    return Promise.reject(error);
  }
);

export default Apis;
