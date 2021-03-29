import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/data",
});

export const sortDataByAge = () => api.get(`/sort-by-age`);

const apis = {
  sortDataByAge,
};

export default apis;
