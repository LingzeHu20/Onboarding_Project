import "./App.css";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import SearchFilter from "./component/SearchFilter";
import CandidateList from "./component/CandidateList";

const App = () => {
  const [title, setTitleValue] = useState();
  const [tag, setTagValue] = useState();
  const [name, setNameValue] = useState();

  return (
    <div>
      <br />
      <br />
      <Container>
        <Row>
          <Col xs="4" sm="4">
            <SearchFilter
              handleTitleValue={setTitleValue}
              handleTagValue={setTagValue}
              handleNameValue={setNameValue}
            />
          </Col>
          <Col xs="8" sm="8">
            <CandidateList title={title} tag={tag} name={name} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
