import "bootstrap/dist/css/bootstrap.min.css";
import Alert from './Components/Alert';
import Alert2 from './Components/Alert2';
import Alert3 from './Components/Alert3';
import Alert4 from './Components/Alert4';

function App() {
  return (
    <div className="App">
      <Alert text="OMG! Something really bad has happended!" />
      <Alert2 show="true"
              text="OMG! Something really bad has happended!" />
      <Alert2 show="false"
              text="OMG! Something really bad has happended!" />
      <Alert3 text="This is a primary alert—check it out!"
              color="orange" />
      <Alert4 text="I am supposed to be green"
              color="green" />
    </div>
  );
}

export default App;
