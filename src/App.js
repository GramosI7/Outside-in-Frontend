import RestaurantScreen from './components/RestaurantScreen';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <RestaurantScreen />
    </Provider>
  );
}

export default App;
