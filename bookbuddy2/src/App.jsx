import { useState, useEffect } from 'react'
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import axios, { all } from 'axios'
import Home from './pages/Home'
import Navbar from './components/navbar'
import BookInfo from './pages/BookInfo'
import LoginForm from './pages/LoginForm'
function App() {
  const [allBooks, setAllBooks] = useState([])
  

    useEffect(() => {
    const fetchBooks = async () => {
      try {
        const {data} = await axios.get("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")
        console.log(data)
        setAllBooks(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchBooks()
  },[])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home allBooks={allBooks} setAllBooks={setAllBooks}/>}/>
        <Route path="pages/:id" element={<BookInfo allBooks={allBooks}/>}/>
        <Route path="/account" element={<LoginForm />}/>
      </Routes>
    </div>
  )

}

export default App
