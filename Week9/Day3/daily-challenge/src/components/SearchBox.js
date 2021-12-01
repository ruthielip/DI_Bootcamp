const SearchBox = (props) => {
  return(
    <div>
      Search: <input type='text' onChange={props.onSearch}/>
    </div>
  )
}

export default SearchBox;
