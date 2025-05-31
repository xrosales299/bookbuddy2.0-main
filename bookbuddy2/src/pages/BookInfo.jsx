import { useParams, Link } from 'react-router-dom'

const BookInfo = ({allBooks, setAllBooks}) => {
    
    const params = useParams()
    const id = params.id*1
    console.log(params)
    const book = allBooks.find((book) => {
        return book.id === id
    })


    return (
        <div>            
                <div>
                    <h2>Title: {book.title}</h2>
                    <h2>ID: {book.id}</h2>
                    <p>Description: {book.description}</p>
                </div>
            
        </div>
    )
}

export default BookInfo