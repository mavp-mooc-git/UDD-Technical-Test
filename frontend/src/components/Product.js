import Card from "react-bootstrap/Card";

const cardStyle = {
  width: "12rem"
};

const imgStyle = {
  height: "12rem"
};

const Product = ({item}) => {
  var numformat = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0, 
  });

  return (
    <Card style={cardStyle} className="card">
      <Card.Img variant="top" src={item.thumbnail} style={imgStyle} />
      <Card.Body className="text-start">
        <Card.Title className="fw-bold">
          <span>{item.currency_id}</span>
          {numformat.format(item.price)}
        </Card.Title>
        <Card.Text className="text-success">Stock: {item.available_quantity}</Card.Text>
        <Card.Text className="text-success">Estado: {item.condition}</Card.Text>
        <Card.Text className="text-muted">{item.title}</Card.Text>
      </Card.Body>
    </Card>
  )
};

export default Product;
