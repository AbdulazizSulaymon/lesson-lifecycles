import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Clock from './Components/Clock';
import Loading from './Components/Loading';

function App() {
  return (
    <div className="App text-center">
      {/* <Clock /> */}
      <Loading />
    </div>
  );
}

export default App;
