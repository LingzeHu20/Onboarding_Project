import React, { useEffect, useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Badge,
} from "reactstrap";
import * as userAPI from "../api/users";
import PaginationComponent from "./PaginationComponent";

const CandidateList = (props) => {
  const { name, title, tag } = props;
  const [candidates, setCandidates] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const getCandidates = async () => {
    const result = await userAPI.getUsersByFilter({
      name: name,
      title: title,
      tag: tag,
      currPage: pageNum,
    });
    return result;
  };

  useEffect(() => {
    getCandidates().then((result) => {
      console.log(result);
      setCandidates(result.result);
    });
  }, [name, title, tag, pageNum]);

  const getKeyWords = () => {
    let keyWord = "";
    if (name !== undefined) keyWord = keyWord + name + " ";
    if (title !== undefined) keyWord = keyWord + title + " ";
    if (tag !== undefined) keyWord = keyWord + tag + "";
    return keyWord;
  };

  const haveSearchKeyword = () => {
    return name !== "" || title !== "" || tag !== "";
  };

  return (
    <div>
      <PaginationComponent />
      {haveSearchKeyword() ? (
        <div>
          According to the Keyword: {getKeyWords()}, we have the{" "}
          {candidates.length} results.
        </div>
      ) : (
        <div>We have the {candidates.length} results.</div>
      )}
      <br></br>
      <ListGroup>
        {(candidates || []).map((candidate) => {
          return (
            <ListGroupItem key={candidate.id}>
              <ListGroupItemHeading>
                {candidate.user_name}
                <Badge style={{ marginLeft: "10px" }} color="primary">
                  {candidate.tag}
                </Badge>
              </ListGroupItemHeading>
              <ListGroupItemText>
                <div>
                  <div>
                    {candidate.title}
                    <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                      @ {candidate.company_name}{" "}
                    </span>
                  </div>
                  <br></br>
                  <div>
                    {" "}
                    <span style={{ fontWeight: "bold" }}>
                      Work Time:
                    </span> From {candidate.begin_from} to {candidate.end_at}
                  </div>
                  <div>
                    {" "}
                    <span style={{ fontWeight: "bold" }}>Contact:</span>{" "}
                    {candidate.phone} / {candidate.email}
                  </div>
                </div>
              </ListGroupItemText>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default CandidateList;
