import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Clock from './Components/Clock';
import Loading from './Components/Loading';
import LoadingWithHook from './Components/LoadingWithHook';

function App() {
  return (
    <div className="App text-center">
      {/* <Clock /> */}
      {/* <Loading /> */}
      <LoadingWithHook />
    </div>
  );
}

export default App;
