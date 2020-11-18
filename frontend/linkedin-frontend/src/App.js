import "./App.css";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import SearchFilter from "./component/SearchFilter";
import CandidateList from "./component/CandidateList";
import { MyContext } from "./utils/context-manager";

const App = () => {
  const [title, setTitleValue] = useState();
  const [tag, setTagValue] = useState();
  const [name, setNameValue] = useState();

  useEffect(()=>{
    console.log(name);
  }, [name])
  return (
    <div>
      <br />
      <br />
      <Container>
        <Row>
          <Col xs="4" sm="4">
            <MyContext.Provider
              value={{ setTitleValue, setTagValue, setNameValue }}
            >
              <SearchFilter />
            </MyContext.Provider>
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
