import logo from './logo.svg';
import './App.css';
import Languages from './daily-challenge/Languages';
import PrintHello from './XP/Exercise1/PrintHello';
import "bootstrap/dist/css/bootstrap.min.css";
import Bootstrap from './XP/Exercise2/Bootstrap';
import BootstrapCard from './XP/Exercise3/BootstrapCard';
import Jumbotron from './XP/Exercise4/Jumbotron'

const celebs = [
  {
    title: "McCartney",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
    description: "Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles."
  },
  {
    title: "Bob Dylan",
    imageUrl: "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
    description: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades."
  }
]

function App() {
  return (
    <div>
       <Languages />
       <PrintHello />
       <Bootstrap />
       {celebs.map(cel =>(
         <BootstrapCard
           title={cel.ttile}
           imageUrl={cel.imageUrl}
           buttonLabel={cel.buttonLabel}
           buttonUrl={cel.buttonUrl}
           description={cel.description}
         />
       ))}
       <Jumbotron
           title="Welcome to react"
           buttonLabel="Go to the official website"
           buttonUrl="https://reactjs.org/"
           description="React is the most popular rendering library in the world"
       />
    </div>
  );
}

export default App;
