import React, { useContext } from "react";
import { PersonPageContext } from "../context";
import {
  BackGroundGrey,
  H2,
  Container,
  ButtonSignOut,
  ItemBox,
  ButtonCancel,
  TypsBox,
} from "./Styled";
import AddItemForm from "../../../Components/AddItemForm/AddItemForm";
import Spinner from "../../../Components/Spinner/Spinner";
import ProductsCategoryItem from "../../../Components/ProducsCategoryItem/ProducsCategoryItem";
import { Link } from "react-router-dom";
import { RoutesPath } from "../../../RoutesPath";
import ItemModal from "../../../Components/ItemModal";

const PersonPageContent = () => {
  const { contextdataPersonPage } = useContext(PersonPageContext);
  const {
    madePosts,
    setUser,
    addForm,
    setAddForm,
    loading,
    user,
    unApprovedItems,
  } = contextdataPersonPage;

  const IsApprovedItems = () => {
    return (
      <Container>
        <H2>
          Unapproved announcment <span>&#8595;</span>
        </H2>
        {unApprovedItems.map(({ id, ...rest }) => {
          return (
            <div key={id}>
              <ItemModal id={id} {...rest} />
            </div>
          );
        })}
      </Container>
    );
  };

  return (
    <BackGroundGrey>
      <Container>
        <H2>Person Page of {user.login}</H2>
      </Container>
      <Container>
        <ButtonSignOut onClick={() => setUser(null)}>Sign out</ButtonSignOut>
        <TypsBox>{user.typs} typs</TypsBox>
        <ButtonSignOut onClick={() => setAddForm(!addForm)}>
          {addForm ? "x" : "+"}
        </ButtonSignOut>
        {addForm ? (
          <AddItemForm />
        ) : (
          <H2>
            Create new announcement <span>&#8599;</span>
          </H2>
        )}
      </Container>
      {unApprovedItems ? IsApprovedItems() : null}
      <Container>
        <H2>Previous announcement</H2>
        {loading ? (
          <Spinner />
        ) : (
          madePosts.map((el) => (
            <ItemBox key={el.id}>
              <Link
                to={`${RoutesPath.productsCategoryPage}/${el.idCategory}/${el.id}`}
              >
                <ProductsCategoryItem {...el} />
              </Link>
              <ButtonCancel id={el.id}>x</ButtonCancel>
            </ItemBox>
          ))
        )}
      </Container>
    </BackGroundGrey>
  );
};

export default PersonPageContent;
