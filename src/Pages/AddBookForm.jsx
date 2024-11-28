import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addBook } from '../Pages/booksSlice'; // Import your Redux action

const AddBookForm = () => {
  const dispatch = useDispatch(); // Initialize dispatch

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook({ title, author })); // Dispatch the action
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
