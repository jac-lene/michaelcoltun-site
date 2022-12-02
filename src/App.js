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
const home = useRef(null)
const fca = useRef(null)
const select = useRef(null)
const live = useRef(null)
const about = useRef(null)

const [enter, setEnter] = useState(false)

function clickToEnter () {
  setEnter(true)
}

const handleScroll = (ref) => {
  window.scrollTo({
    top: ref.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};

  return (
    <div className="App">
      <header><Header handleScroll={handleScroll} home={home} fca={fca} select={select} live={live} about={about}/></header>
      <Home clickToEnter={clickToEnter} home={home} select={select}/>
      <SelectedWork />
      <Line fca={fca} />
      <FilmCommAdd />
      <Line2 live={live}/>
      <Live />
      <Line3 about={about} />
      <About />
    </div>
  );
}

export default App;
