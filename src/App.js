
import './App.css';
import Header from './pages/Shared/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import Packages from './pages/Packages/Packages';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Details from './pages/Details/Details';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import BookTicket from './pages/BookTicket/BookTicket';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/Notfound/NotFound';


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/packages'>
              <Packages></Packages>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/details/:packid'>
              <Details></Details>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <PrivateRoute path='/bookTicket/:id'>
              <BookTicket></BookTicket>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
