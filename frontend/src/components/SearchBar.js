import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

const SearchBar = ({setFind}) => {
  const inputRef = useRef("");

  const onSubmit = () => {
    setFind(inputRef.current?.value);
  };

  return (
    <Form className="d-flex">
      <FormControl
        ref={inputRef}
        type="search"
        placeholder="Buscar"
        className="me-2"
        aria-label="Buscar"
      />
      <Button variant="primary" onClick={onSubmit}>Buscar</Button>
    </Form>
  );
};

export default SearchBar;
