import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const Navbar = () => (
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: "darkblue",
      }}
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: "darkblue",
      }}
    >
      About
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: "darkblue",
      }}
    >
      Login
    </NavLink>
  </div>
);

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <br></br>
      <form>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById("root")
);
