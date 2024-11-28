import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewBook = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.books.find((b) => b.id === parseInt(id, 10))
  );

  return book ? (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
    </div>
  ) : (
    <p>Book not found</p>
  );
};

export default ViewBook;
