import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

const headerStyle = {
  backgroundColor: "#fff159",
  height: 100,
  padding: 10
};

const Header = ({setFind, setFilter, setPage}) => {
  return (
    <Container style={headerStyle}>
      <Row>
        <Col xs={12} md={6}><SearchBar setFind={setFind} /></Col>
        <Col xs={12} md={6}><Filter setFilter={setFilter} setPage={setPage} /></Col>
      </Row>
    </Container>
  );
};

export default Header;
