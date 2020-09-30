import React from "react";
import { PageContextProvider } from "./context";
import PageContent from "./content/content";

const BookingPage = () => (
  <PageContextProvider>
    <PageContent />
  </PageContextProvider>
);

export default BookingPage;
