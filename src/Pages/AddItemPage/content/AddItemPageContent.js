import React, { useContext } from "react";
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
import Spinner from "../../../Components/Spinner/Spinner";
import ErrorModal from "../../../Components/ErrorModal";
import { AddItemPageContext } from "../context";

const AddItemPageContent = () => {
  const { contextDataAddItemPage } = useContext(AddItemPageContext);
  const { loading, error, items } = contextDataAddItemPage;

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorModal />;
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
export default AddItemPageContent;
