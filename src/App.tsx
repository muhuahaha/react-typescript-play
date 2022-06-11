import './App.scss';
import Greeting from './components/props/Greeting';

function App() {
  return (
    <div className="App">
      <h1>
        <Greeting name="John" isLoggedIn={false} />
      </h1>
    </div>
  );
}

export default App;
