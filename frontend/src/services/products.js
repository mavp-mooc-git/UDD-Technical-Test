const axios = require("axios");
const baseUrl = "/api/search";

const getProducts = async (query, page, filter) => {
  const response = await axios.get(`${baseUrl}?q=${query}&offset=${30 * (page - 1)}&sort=${filter}`);
  const result = response.data;
  return result;
}

export default getProducts;
