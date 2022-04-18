import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import Product from "./Product";

const catalogStyle = {
  backgroundColor: "#ebebeb",
  marginBottom: 15,
  padding: 20
};

const Catalog = ({products}) => {
  if(!products || products.length === 0) return (
    <div className='my-5'>
      <p>Datos no disponibles</p>
      <p>Por favor, use la casilla de búsqueda para encontrar productos</p>
    </div>
  );

  return (
    <div className="container" style={catalogStyle}>
      <Row xs={2} md={4} className="g-4">
        {products.map((p, idx) => (
          <Col key={idx}>
            <Product item={p} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Catalog;
