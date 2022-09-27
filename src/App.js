import { useRef } from 'react'
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
const homeRef = useRef(null)

const scrollFunction = (ref) => {
  ref.current.scrollIntoView();
}

  return (
    <div className="App">
      <header><Header scrollFunction={scrollFunction} home={homeRef}/></header>
      <Home home={homeRef}/>
    </div>
  );
}

export default App;
