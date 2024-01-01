import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title="Easy" targettime={1}/>
        <TimerChallange title="Not easy" targettime={5}/>
        <TimerChallange title="Getting tough" targettime={10}/>
        <TimerChallange title="Pros only" targettime={15}/>
      </div>
    </>
  );
}

export default App;
