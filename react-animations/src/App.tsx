import SpringDemo from './components/springDemo';
import Scrolling from './components/Scrolling';
import './App.css';
import { Switch, Route, NavLink } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <header className="App-header">
      <NavLink to="/scroll" activeClassName="scroll">
        scroll
      </NavLink>
      <br></br>
      <NavLink to="/fade-in" activeClassName="fade-in">
        fade in
      </NavLink>
      <br></br>
      <NavLink to="/" activeClassName="home">
        home
      </NavLink>
    
      </header>

      <main className="App-main">
        <Switch>
          <Route path="/scroll">
            <Scrolling />
          </Route>

          <Route path="/fade-in">
            <SpringDemo />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
