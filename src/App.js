import firstImage from '../src/image/imag.png'
import './App.css';
import Home from './Home';
import Nextpage from './Nextpage';

function App() {
  return (
    <div>
      <div>
        <div className="header">
          <div className="header-size">
            <img src={firstImage} />
            <h2>The Smart Traveller</h2>
          </div>
        </div>
      </div>
      <Home />
      <Nextpage />
    </div>
  );
}

export default App;
