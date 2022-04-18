import './App.css';
import { useState, useEffect } from "react";
import Catalog from './components/Catalog';
import Header from './components/Header';
import Paginator from './components/Paginator';
import getProducts from './services/products';

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [find, setFind] = useState("");
  const [filter, setFilter] = useState("");
  const paging = {
    paging: products.paging,
    page,
    setPage
  };

  useEffect(() => {
    getProducts(find, page, filter)
      .then(response => {
        setProducts(response);
      })
  }, [filter, find, page]);

    return (
    <div className="App container d-flex flex-column">
      <Header setFind={setFind} setFilter={setFilter} setPage={setPage} />
      <Catalog products={products.result} />
      <Paginator className="mx-auto" paging={paging} />
    </div>
  );
}

export default App;
