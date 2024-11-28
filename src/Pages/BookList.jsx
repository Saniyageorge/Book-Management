import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from './booksSlice';
import { Link } from 'react-router-dom';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <h2>Book List</h2>
      <Link to="/add">Add New Book</Link>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <Link to={`/view/${book.id}`}>View</Link>
            <Link to={`/edit/${book.id}`}>Edit</Link>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
