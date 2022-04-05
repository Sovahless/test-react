import logo from './pog.png';
import chad from './chad.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Poggers
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Want to Pog like a Chad ?
        </a>
        <img src={chad} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
