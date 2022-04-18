const express = require("express");
const app = express();
const { getAll } = require("./services/products");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.get("/api/search", async (request, response) => {
  try {
    const item = request.query.q;
    //console.log("item", item);
    const offset = request.query.offset;
    //console.log("offset", offset);
    const sort = request.query.sort;
    const data = await getAll(item, Number(offset), sort);
    //console.log("data", data);
    response.json(data);
  } catch (error) {
    console.log(`${error}`);
  }
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({
    error: "unknown endpoint"
  });
}

app.use(unknownEndpoint);

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// `/api/search`
// GET /api/search?query=zapatillas

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
*/
