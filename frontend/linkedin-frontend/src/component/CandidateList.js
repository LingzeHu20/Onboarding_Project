import React, { useEffect, useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Badge
} from "reactstrap";
import * as userAPI from "../api/users";

const CandidateList = (props) => {
  const { name } = props;
  const [candidates, setCandidates] = useState();

  const getCandidates = async (name) => {
    const result = await userAPI.getUsersByFilter({ name: name });
    setCandidates(result.result);

    return result;
  };

  useEffect(() => {
    const result = getCandidates(name);
    console.log(result);
    setCandidates(result.result);
  }, [name]);

  return (
    <div>
      <ListGroup>
        {candidates &&
          candidates.map((candidate) => {
            return (
              <ListGroupItem key={candidate.id}>
                <ListGroupItemHeading>
            {candidate.user_name}{" "} <Badge color="primary">{candidate.tag}</Badge>
                </ListGroupItemHeading>
                <ListGroupItemText>Title: {candidate.title}</ListGroupItemText>
              </ListGroupItem>
            );
          })}
      </ListGroup>
    </div>
  );
};

export default CandidateList;
