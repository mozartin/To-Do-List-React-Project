import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormComponent from "./FormComponent";
import ListItems from "./ListItems";

export default function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/todo")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.reverse());
      });
  }, [setData]);

  const updateList = () => {
    fetch("http://localhost:3100/todo")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.reverse());
      });
  };

  return (
    <Container>
      <Row>
        <Col className="content">
          <h1>To Do List </h1>
          <FormComponent updateList={updateList} />
          <ListItems updateList={updateList} data={data} />
        </Col>
      </Row>
    </Container>
  );
}
