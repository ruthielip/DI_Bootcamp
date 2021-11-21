import './MyComponent.css';

const mystyle = {
  color: 'white',
  backgroundColor: 'DodgerBlue',
  padding: '10px',
  fontFamily: 'Arial'
}

const mySuperStyles = {
  color: 'yellow',
  fontSize: '16px',
  fontWeight: 'bold',
  border: '1px solid black',
  backgroundColor: 'black',
  padding: '5px',
  borderRadius: '8px',
  cursor: 'pointer',
  margin: '10px'
}

const MyComponent = () => {
  return(
    <div>
      <h1 className='newStyle'>Hello Style!</h1>
      <h1 style={mystyle}>Hello Style!</h1>
      <h1 style={{color: 'red', backgroundColor: 'lightblue'}}>Hello Style!</h1>
      <button style={mySuperStyles}>I'm a stylish button</button>
      <h1>This is a Header</h1>
      <p>This is a Paragraph</p>
      <a href=''>This is a Link</a>
      <h2>This is a Form:</h2>
      <form>
         <p>Enter your name:</p>
         <input type="text"/><button>Submit</button>
      </form>
      <h3>Here is an Image:</h3>
      <img src={'http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png'}/>
      <h4>This is a List:</h4>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
  )
}

export default MyComponent;
