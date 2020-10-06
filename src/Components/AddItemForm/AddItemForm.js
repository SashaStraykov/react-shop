import React, { useEffect, useState } from "react";
import { Span, Form, InputC, Select, InputDescription } from "./Styled";
import Spinner from "../Spinner/Spinner";

const AddItemForm = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const req = async () => {
      await fetch("http://localhost:3000/category")
        .then((response) => response.json())
        .then((data) => setItems(data));
    };

    req();
    setLoading(false);
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
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
    );
  }
};
export default AddItemForm;
