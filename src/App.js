import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite <code>src/App.js</code> e salve para recarregar.
        </p>
      </header>
    </div>
  );
}

export default App;
