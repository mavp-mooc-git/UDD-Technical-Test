const axios = require("axios");
const baseUrl = "https://api.mercadolibre.com/sites/MLA/search";

const getAll = async (item, offset, sort) => {
  //console.log("item offset", item, offset);
  const response = await axios.get(`${baseUrl}?q=${item}&offset=${offset}&limit=30&sort=${sort}`);
  //console.log("response", response);
  const result = response.data;
  //console.log("result", result.results);
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
  //console.log("data", data);
  return data;
}

module.exports = { getAll };

/*
[
  {
    "id": "MLA785937833",
    "title": "Zapatillas Marca Rcn Ultraliviana Negra",
    "price": 1769,
    "currency_id": "ARS",
    "available_quantity": 200,
    "thumbnail": "http://http2.mlstatic.com/D_728833-MLA32445355209_102019-I.jpg",
    "condition": "new"
  },
  ...
]

{
  id: results[0].id,
  title: results[0].title,
  price: results[0].price,
  currency_id: results[0].prices.prices[0].currency_id,
  available_quantity: results[0].available_quantity,
  thumbnail: results[0].thumbnail,
  condition: results[0].condition
},


*/
