import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Create from "./pages/create/Create";
import Accont from "./pages/accont/Accont";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { AdminContext } from "./Context/LoginContext";
import { useContext } from "react";

// Import React router dom to handel the navigate between the links
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // Check admins if is logged in

  // Make context data accessible
  const { admin } = useContext(AdminContext);
  return (
    // Router dom handle navigation between navbar's items
    <Router>
      {/* Switch between navbar item by router URL  */}
      <Switch>
        {/* Home page (USE EXACT FOR URL) */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* Show a single page*/}
        <Route path="/item/:itemId">
          <Single />
        </Route>
        {/* Register page */}
        <Route path="/register">
          {/* To register if it's not admin */}
          {admin ? <Home /> : <Register />}
        </Route>
        {/* --------ADMIN PAGES---------- */}
        {/* Login page */}

        <Route path="/login">
          {/* To register if it's not admin */}
          {admin ? <Home /> : <Login />}
        </Route>
        {/* Admin accont */}
        <Route path="/accont">
          {/* To register if it's not admin */}
          {admin ? <Accont /> : <Login />}
        </Route>
        {/* Create new post */}
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
