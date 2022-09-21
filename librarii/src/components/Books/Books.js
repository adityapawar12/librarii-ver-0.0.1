import React from "react";
import BooksForm from "./BooksForm/BooksForm";
import BooksList from "./BooksList/BooksList";

const Books = () => {
  return (
    <div>
      Books
      <BooksForm />
      <BooksList />
    </div>
  );
};

export default Books;
