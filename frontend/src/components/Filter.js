import Form from 'react-bootstrap/Form';

const Filter = ({setFilter, setPage}) => {
  return (
    <Form.Select
      onChange={e => {
        setFilter(e.target.value);
        setPage(1);
      }}>
      <option value="relevant">Seleccionar filtro:</option>
      <option value="price_asc">precio, ascendente</option>
      <option value="price_desc">precio, descendente</option>
    </Form.Select>
  );
};

export default Filter;
