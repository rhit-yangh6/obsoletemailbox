import './App.css';
import Marquee from "react-smooth-marquee";
import mailbox1 from './imgs/mailbox-1.jpeg';
import mailbox2 from './imgs/mailbox-2.jpeg';
import mailbox3 from './imgs/mailbox-3.jpeg';
import mailbox4 from './imgs/mailbox-4.jpeg';
import qrCode from './imgs/qr-code.jpeg';
import ReactCardFlip from "react-card-flip";
import {useState} from "react";

function App() {
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div className='scroll'>
          <p className="marquee">
            <span> I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here </span>
          </p>
          <p className="marquee marquee2">
            <span> I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here </span>
          </p>
        </div>


        <div className='img-wrapper'>
          <img className='img-mailbox' src={mailbox4} alt='mb4' />


          <ReactCardFlip isFlipped={flip2} flipDirection="horizontal" >
            <div onMouseEnter={() => {setFlip2(!flip2)}}>
              <img className='img-mailbox' src={mailbox2} alt='mb2' />
            </div>
            <div onMouseLeave={() => {setFlip2(!flip2)}}>
              <div className='card-back' >
                <p>亲爱的孩子：昨天理了你的信，</p>
                <p>又有些感想。</p>
                <p>会这样欣赏他，</p>
                <p>理解他。</p>
              </div>
            </div>
          </ReactCardFlip>

          <ReactCardFlip isFlipped={flip3} flipDirection="horizontal" >
            <div onMouseEnter={() => {setFlip3(!flip3)}}>
              <img className='img-mailbox' src={mailbox3} alt='mb3' />
            </div>
            <div className='card-back-qr-code' onMouseLeave={() => {setFlip3(!flip3)}} >
              <img className='qr-code' src={qrCode} alt='qr-code' />
            </div>
          </ReactCardFlip>

          <img className='img-mailbox' src={mailbox1} alt='mb1' />

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
