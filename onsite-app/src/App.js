import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from './component/login/login';
import SignUp from './component/signup/signup';


function App() {
  return (
    <div className="App">
      <div class="header">
        <a href="#default" class="logo">ON SITE ASSISTANCE</a>
        <div class="header-right">
          <a class="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>


      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
        </Switch>
      </Router>


      <div class="footer">
        <p> Copyrights Onsite Assistance 2021.</p>
      </div>

    </div>
  );
}

export default App;
