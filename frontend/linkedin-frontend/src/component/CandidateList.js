import React, { useEffect, useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Badge,
} from "reactstrap";
import * as userAPI from "../api/users";

const CandidateList = (props) => {
  const { name, title, tag } = props;
  const [candidates, setCandidates] = useState([]);

  const getCandidates = async () => {
    const result = await userAPI.getUsersByFilter({
      name: name,
      title: title,
      tag: tag,
    });
    return result;
  };

  useEffect(() => {
    getCandidates().then(result => {
      setCandidates(result.result);
    })
  }, [name, title, tag]);

  return (
    <div>
      <ListGroup>
        {(candidates || []).map((candidate) => {
          return (
            <ListGroupItem key={candidate.id}>
              <ListGroupItemHeading>
                {candidate.user_name}{" "}
                <Badge color="primary">{candidate.tag}</Badge>
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
