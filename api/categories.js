import axios from "axios";
const url = "http://localhost:3000/";

export const getCategories = () => {
     axios
    .get(url + "categories")
    .then((response) => {
      response.data;
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};
