import axios from "axios";
const url = "http://localhost:3000/";

export const getCategories = () => {
  return axios.get(`${url}categories`).then((response) => {
    console.log("Data:", response.data);
  });
};
