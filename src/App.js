import logo from './logo.svg'
import './App.css';
import { useState } from 'react';

function App() {
  let [infected, setInfected] = useState(0);
  let [dead, setDead] = useState(0);
  let [iva, setIva] = useState(0);

  async function setSick() {
    let a = await fetch('https://api.apify.com/v2/key-value-stores/8mRFdwyukavRNCr42/records/LATEST?disableRedirect=true');
    let b = await a.json();
    setInfected(b.infected);
    setDead(b.deceased);
    setIva(b.intensiveCare);
  }
  setSick();

  return (
    <div className="App" onClick={setSick}>
      <header className="App-header">
        <h1 className='Tit'>Covid-19</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Smittade någonsin: {infected}</h1>
        <h5>Antal döda: {dead}</h5>
        <h5>Antal intensivvårdade: {iva}</h5>

        <p>Källa: <a target="_blank" href='https://www.folkhalsomyndigheten.se/'>folkhälsomyndigheten.se</a></p>
      </header>
    </div>
  );
}

export default App;
