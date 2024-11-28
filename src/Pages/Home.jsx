import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import bookGif from '../assets/Images/book-animated.gif';


const Home = () => (
  <div className="home-container">
    <header className="home-header">
      <h1>Book Management System</h1>
      <p>Your one-stop solution to manage your book collection efficiently.</p>
      <img src={bookGif} alt="Animated books" className="home-image" />
    </header>

    <main className="home-main">
      <section className="home-actions">
        <h2>What would you like to do?</h2>
        <div className="home-links">
          <Link to="/add" className="home-link-button">📚 Add a New Book</Link>
          <Link to="/" className="home-link-button">📖 View Book Collection</Link>
        </div>
      </section>

      <section className="home-info">
        <h2>About This Application</h2>
        <p>
          Manage your personal library with ease. Add new books, edit their details,
          and keep track of your entire collection in one place.
        </p>
        <p>
          Start by adding your favorite books, or check out the collection you’ve already created!
        </p>
      </section>
    </main>

    <footer className="home-footer">
      <p>&copy; {new Date().getFullYear()} Book Management System. All rights reserved.</p>
    </footer>
  </div>
);

export default Home;
