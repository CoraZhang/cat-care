import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ControlledCarousel from './components/Carousel/ControlledCarousel';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cat Care</h1>
        <NavBar />
      </header>
      <div className="gallary">
        <ControlledCarousel/>
      </div>
    </div>
  );
}
export default App;
