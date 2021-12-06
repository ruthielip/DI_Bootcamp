import '../App.css'

const Book = (props) => {
  const {bookArray} = props;

  if(bookArray===null){
    return(
      <div></div>
    )
  } else {
    return (
      <div className='books'>
        {
          bookArray.map((book, i)=>{
            return (
              <div key={i} className='book'>
                 <img alt={book.volumeInfo.title} src= {book.volumeInfo.imageLinks.thumbnail}/>
                 <p className='title'>{book.volumeInfo.title}</p>
                 <p>Author: {book.volumeInfo.authors}</p>
                 <p>Published: {book.volumeInfo.publishedDate}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Book;
