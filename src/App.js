
import './App.css';
import Header from './pages/Shared/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
        <Home></Home>

      </Router>

    </div>
  );
}

export default App;
