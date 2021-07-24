import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Clock from './Components/Clock';
import Loading from './Components/Loading';
import LoadingWithHook from './Components/LoadingWithHook';
import Pomodoro from './Components/Pomodoro';
import Secundomer from './Components/Secundomer';
import Secundomer2 from './Components/Secundomer2';

function App() {
  return (
    <div className="App text-center mt-5">
      {/* <Clock /> */}
      {/* <Loading /> */}

      {/* Hook components */}
      {/* <LoadingWithHook  /> */}
      {/* <Pomodoro workTime={25} restTime={5} />
      <Pomodoro workTime={30} restTime={10} /> */}

      <Secundomer />
      <Secundomer2 />
    </div>
  );
}

export default App;
