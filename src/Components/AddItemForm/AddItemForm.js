import React, { useEffect, useState } from "react";
import {
  Span,
  Form,
  InputC,
  Select,
  InputDescription,
  Box,
  H2,
  Container,
} from "./Styled";
import Spinner from "../Spinner/Spinner";
import ErrorModal from "../ErrorModal";

const AddItemForm = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const req = async () => {
      await fetch("http://localhost:3000/category")
        .then((response) => response.json())
        .then((data) => setItems(data))
        .catch((e) => setError(true));
    };

    req();
    setLoading(false);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if(error) {
    return <ErrorModal/>
  }
  return (
    <Box>
      <Container>
        <H2>Add new announcment</H2>
      </Container>

      <Form>
        <Span>Title</Span>
        <InputC />
        <Span>Category</Span>
        <Select>
          {items.map(({ idCategory }) => (
            <option key={idCategory}>{idCategory}</option>
          ))}
        </Select>
        <Span>Description</Span>
        <InputDescription />
        <Span>Photos</Span>
        <InputC type="file" multiple />
        <InputC type="file" multiple />
        <InputC type="file" multiple />
      </Form>
    </Box>
  );
};
export default AddItemForm;
