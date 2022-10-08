import firstImage from '../src/image/imag.png'
import './App.css';
import Client from './Client';
import Explore from './Explore';
import FreeQuotes from './FreeQuotes';
import Home from './Home';
import Nextpage from './Nextpage';
import Slider from './Slider';

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
      <Explore />
      <Client />
      <Slider />
      <FreeQuotes />
    </div>
  );
}

export default App;
