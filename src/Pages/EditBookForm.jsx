import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBook } from './booksSlice';
import { useNavigate, useParams } from 'react-router-dom';

const EditBookForm = () => {
  const { id } = useParams();
  const book = useSelector((state) => state.books.books.find((b) => b.id === id));
  const [title, setTitle] = useState(book?.title || '');
  const [author, setAuthor] = useState(book?.author || '');
  const [description, setDescription] = useState(book?.description || '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({ id, title, author, description }));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Book</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditBookForm;
