import './App.css';

import Header from './components/Header';
import Loader from './components/Loader';
import Selector from './components/Selector';

function App() {
  return (
    <div>
      <Header />
      <Selector />
      <hr />
      <h1>Yo</h1>
      <Loader />
    </div>
  );
}

export default App;
