import Car from './Components/Car'
import Phone from './Components/Phone'

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};
  return (
    <div className="App">
      <Car
      info = {carinfo}
      />
      <Phone />
    </div>
  );
}

export default App;
