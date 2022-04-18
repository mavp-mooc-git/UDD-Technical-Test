const express = require("express");
const NodeCache = require("node-cache");
const myCache = new NodeCache();
const app = express();
const { getAll } = require("./services/products");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.get("/api/search", async (request, response) => {
  try {
    const item = request.query.q;
    const offset = request.query.offset;
    const sort = request.query.sort;
    /* const data = await getAll(item, Number(offset), sort);
    response.json(data); */
    if (myCache.has(item + offset + sort)) {
      console.log('Retrieved value from cache !!');
      response.send(myCache.get(item + offset + sort));
    } else {
      const data = await getAll(item, Number(offset), sort);
      myCache.set(item + offset + sort, data);
      console.log('Value not present in cache, performing computation');
      response.json(data);
    }
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
