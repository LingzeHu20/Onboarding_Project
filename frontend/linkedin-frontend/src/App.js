import "./App.css";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import SearchFilter from "./component/SearchFilter";
import CandidateList from "./component/CandidateList";

const App = () => {
  const [title, setTitleValue] = useState();
  const [tag, setTagValue] = useState();
  const [name, setNameValue] = useState();
  const [pageNum, setPageNum] = useState();
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
              handlePageNum={setPageNum}
            />
          </Col>
          <Col xs="8" sm="8">
            <CandidateList
              title={title}
              tag={tag}
              name={name}
              pageNum={pageNum}
              handlePageNum={setPageNum}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
