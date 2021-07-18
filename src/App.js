import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Clock from './Components/Clock';
import Loading from './Components/Loading';
import LoadingWithHook from './Components/LoadingWithHook';
import Pomodoro from './Components/Pomodoro';

function App() {




  return (
    <div className="App text-center">
      {/* <Clock /> */}
      {/* <Loading /> */}

      {/* Hook components */}
      {/* <LoadingWithHook  /> */}
      <Pomodoro workTime={25} restTime={5} />
      <Pomodoro workTime={30} restTime={10} />
    </div>
  );
}

export default App;
