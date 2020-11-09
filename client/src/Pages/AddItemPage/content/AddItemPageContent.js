import React, { useContext } from 'react';
import {
  Span,
  Form,
  InputC,
  Select,
  InputDescription,
  Box,
  H2,
  Container,
  Button,
  BoxInfo,
} from './styled';
import Spinner from '../../../Components/Spinner';
import ErrorModal from '../../../Components/ErrorModal';
import { AddItemPageContext } from '../context';

const AddItemPageContent = () => {
  const { contextDataAddItemPage } = useContext(AddItemPageContext);
  const {
    loading, error, items, title, setTitle, description, setDescription,
    category, setCategory, setImgs, postData, price, setPrice,
  } = contextDataAddItemPage;

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorModal />;
  }
  return (
    <Box>

      <H2>Add new announcment</H2>

      <Form enctype="multipart/form-data" onSubmit={postData}>
        <BoxInfo>
          <Span>Title</Span>
          <InputC  value={title} onChange={(e) => setTitle(e.target.value)} />
        </BoxInfo>
        <BoxInfo>
          <Span>Category</Span>
          <Select  value={category} onChange={(e) => setCategory(e.target.value)}>
            {items.map(({ idCategory }) => (
              <option key={idCategory}>{idCategory}</option>
            ))}
          </Select>
        </BoxInfo>
        <BoxInfo>
          <Span>Description</Span>
          <InputDescription  value={description} onChange={(e) => setDescription(e.target.value)} />
        </BoxInfo>
        <BoxInfo>
          <Span>Price</Span>
          <InputC value={price} onChange={(e) => setPrice(e.target.value)} />
        </BoxInfo>
        <BoxInfo>
          <Span>Photos</Span>
          <InputC name="file" onChange={(e) => setImgs(e.target.files)} type="file" multiple />
        </BoxInfo>
        <Button>SEND</Button>
      </Form>
    </Box>
  );
};
export default AddItemPageContent;
