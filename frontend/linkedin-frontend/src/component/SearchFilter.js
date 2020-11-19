import React, { useState } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const SearchFilter = (props) => {
  const { handleTitleValue, handleTagValue, handleNameValue } = props;
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const handleSearch = () => {
    if (title !== undefined) handleTitleValue(title);
    if (tag !== undefined) handleTagValue(tag);
    if (name !== undefined) handleNameValue(name);
  };
  return (
    <div>
      <Card body>
        <CardTitle tag="h5">Filter the Candidates</CardTitle>
        <CardText>Please input the filter to search the candidate</CardText>

        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="search"
              name="name"
              id="name"
              placeholder="Please input the name of candidate"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="search"
              name="title"
              id="title"
              placeholder="Please input the title of the job"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </FormGroup>
          <FormGroup>
            <Label for="tag">Tag/Industry</Label>
            <Input
              type="search"
              name="tag"
              id="tag"
              placeholder="Please input the desired tag/skill"
              onChange={(e) => setTag(e.target.value)}
              value={tag}
            />
          </FormGroup>

          <Button onClick={handleSearch}>Search</Button>
        </Form>
      </Card>
    </div>
  );
};

export default SearchFilter;
