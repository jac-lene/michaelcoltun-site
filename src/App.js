import { useRef, useState } from 'react'
import './App.css';
import Header from './components/Header';
import FilmCommAdd from './pages/FilmCommAdd';
import Home from './pages/Home';
import SelectedWork from './pages/SelectedWork'
import Line from './components/Line';
import Live from './pages/Live';
import About from './pages/About';
import Line2 from './components/Line2';
import Line3 from './components/Line3';

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
      <Line />
      <SelectedWork />
      <Line2 />
      <Live />
      <Line3 />
      <About />
    </div>
  );
}

export default App;
