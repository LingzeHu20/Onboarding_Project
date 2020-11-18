import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import * as userAPI from "../api/users";

const getCandidates = async (name, title, tag) => {
  return await userAPI.getUsersByFilter({ name: name });
};

const CandidateList = (name, title, tag) => {
  const candidates = getCandidates(name, title, tag);

  return (
    <div>
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Cras justo odio</ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default CandidateList;
