import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducers/index'
import Counter from './components/Counter'

const store = createStore(reducer);


function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  );
}

export default App;
