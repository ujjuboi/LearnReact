import './App.css';
import NavBar from './Components/NavBar';
import Themes from './Components/Themes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h2>Hi, my name is</h2>
      <h1>Ujjwal Verma</h1>
      <h2>I am a Software Developer.</h2>
      <Themes text="Light Theme"></Themes>
    </div>
  );
}

export default App;
