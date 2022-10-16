import './App.css';

import Header from './components/Header';
// import Loader from './components/Loader';
import Selector from './components/Selector';

function App() {
  return (
    <div className="parent-container">
      <Header />
      <Selector />
      <hr />
      {/* <Loader /> */}
    </div>
  );
}

export default App;
