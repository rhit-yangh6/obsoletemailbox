import './App.css';
import Marquee from "react-smooth-marquee";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='scroll'>
          <p className="marquee">
            <span>I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here </span>
          </p>
          <p className="marquee marquee2">
            <span>I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here </span>
          </p>
        </div>

        <div className='img-wrapper'>

        </div>
        <div className='scroll'>
          <p className="marquee">
            <span>I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here </span>
          </p>
          <p className="marquee marquee2">
            <span>I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here </span>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
