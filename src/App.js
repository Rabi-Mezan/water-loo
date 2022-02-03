
import './App.css';
import Header from './pages/Shared/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>


      </Router>

    </div>
  );
}

export default App;
