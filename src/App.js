import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Recovery from './pages/recovery/Recovery';
import Reset from './pages/reset/Reset';
import Dashboard from './pages/dashboard/Dashboard';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
       <Switch>
         <Route path="/userSignUp" component={Signup} />
         <Route path="/login" component={Login} />
         <Route path="/reset" component={Recovery} />
         <Route path="/resetpassword" component={Reset} />
         <Route path="/Dashboard" component={Dashboard} />
       </Switch>
     </Router>
   </div>
  );
}

export default App;
