import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Recovery from './pages/recovery/Recovery';
import Reset from './pages/reset/Reset';

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
         <Route path="/Signup" component={Signup} />
         <Route path="/Login" component={Login} />
         <Route path="/Recovery" component={Recovery} />
         <Route path="/Reset" component={Reset} />
       </Switch>
     </Router>
   </div>

    // <div className="App">
    //   {/* <Login/>  */}
    //   {/* <Signup/>  */}
    //   {/* <Recovery/> */}
    //   {/* <Reset/> */}
    // </div>
  );
}

export default App;
