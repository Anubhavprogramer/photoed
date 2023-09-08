
import './App.css';
import Home from './components/Home';
import Mobile from './components/Mobile';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="fullbodyconatiner">
    <Navbar/>
    {/* <Home/> */}
    <Mobile/>
    </div>
  );
}

export default App;
