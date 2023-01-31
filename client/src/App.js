import './App.css';
import Board from './components/board';
import Header from './components/header/'
import Player from './components/player';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Player whichPlayer='X' propOne={true} propTwo={"Hello World"} propThree={43} />
      <Player whichPlayer='O'/>
      <Board />
    </div>
  );
}

export default App;
