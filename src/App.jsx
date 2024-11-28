import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import AddBookForm from './Pages/AddBookForm'
import BookList from './Pages/BookList'
import EditBookForm from './Pages/EditBookForm'
import ViewBook from './Pages/ViewBook'


function App() {

  return (
    
    <>
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/books" element={<BookList />} />
  <Route path="/add" element={<AddBookForm />} />
  <Route path="/edit/:id" element={<EditBookForm />} />
  <Route path="/view/:id" element={<ViewBook />} />
</Routes>
    </>
  )
}

export default App
