import { useRef, useState } from 'react'
import './App.css';
import Header from './components/Header';
import FilmCommAdd from './pages/FilmCommAdd';
import Home from './pages/Home';

function App() {
const homeRef = useRef(null)
const [enter, setEnter] = useState(false)

function clickToEnter () {
  setEnter(true)
}

const scrollFunction = (ref) => {
  ref.current.scrollIntoView();
}

  return (
    <div className="App">
      <header><Header scrollFunction={scrollFunction} home={homeRef}/></header>
      <Home clickToEnter={clickToEnter} home={homeRef} />
      <FilmCommAdd />
    </div>
  );
}

export default App;
