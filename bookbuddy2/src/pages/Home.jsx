import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Home = ({allBooks, setAllBooks}) => {
    
  return(
    <div>
        {
          allBooks.map((book) => {
            return (
              <div>
                <Link to={`/pages/${book.id}`}>
                  <h1>{book.title}</h1>
                </Link>
              </div>
            )
          }
        )
        }
    </div>
  )
}

export default Home