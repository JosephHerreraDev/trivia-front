const axios = require("axios");

async function getQuestions(category) {
  try {
    const response = await axios.get(
      `http://localhost:3000/questions/${category}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default getQuestions;
