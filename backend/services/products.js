const axios = require("axios");
const baseUrl = "https://api.mercadolibre.com/sites/MLA/search";

const getAll = async (item, offset, sort) => {
  const response = await axios.get(`${baseUrl}?q=${item}&offset=${offset}&limit=30&sort=${sort}`);
  const result = response.data;
  const paging = {
    "total": response.data.paging.total,
    "primary_results": response.data.paging.primary_results,
    "offset": response.data.paging.offset,
    "limit": response.data.paging.limit
  };
  const data = {
    paging,
    result: result.results.map(r => {
      return {
          "id": r.id,
          "title": r.title,
          "price": r.price,
          "currency_id": r.prices.prices[0].currency_id,
          "available_quantity": r.available_quantity,
          "thumbnail": r.thumbnail,
          "condition": r.condition
      };
          
    })
  };
  return data;
}

module.exports = { getAll };
