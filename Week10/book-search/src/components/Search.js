import '../App.css';
import {useState} from 'react';
import Books from './Books'

const Search = (props) => {
  const [text, setText] = useState('');
  const [books, setBooks] = useState(null);
  const [sorted, setSorted] = useState('')

  const getBooks = (event) => {
    event.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
    .then(res=>res.json())
    .then(data=>{
      setBooks(data.items)
    })
    .catch(err=>console.log(err))
  }

  const handleSort = (event) => {
     setSorted(event.target.value)
  }

  if(sorted === ''){

  } else {
      books.sort((a, b)=>{
        if(sorted === 'newest'){
          return parseInt(b.volumeInfo.publishedDate) - parseInt(a.volumeInfo.publishedDate);
        } else if(sorted === 'oldest'){
          return parseInt(a.volumeInfo.publishedDate) - parseInt(b.volumeInfo.publishedDate);
        }
    })
  }

  return(
    <div className='search'>
      <input type='text' placeholder='Search books' onChange={(e)=>setText(e.target.value)}/>
      <button onClick={getBooks}>Search</button>
      <select name='date' onChange={handleSort}>
         <option value='sort'>Sort</option>
         <option value='newest'>Newest</option>
         <option value='oldest'>Oldest</option>
      </select>
      <Books bookArray={books}/>
    </div>
  )
}

export default Search;
