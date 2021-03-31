import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Badge,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Compiler from './Compiler'
import Epreuves from './Epreuves_home.js'
import Hackaton from './Hackaton_home.js'

function App() {
  return (
     <Router>
    <div className="App">
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/profil">Profil</Nav.Link>
            <Nav.Link href="/epreuves">Epreuve</Nav.Link>
            <Nav.Link href="/hackaton">Hackaton</Nav.Link>
          </Nav>
        </Navbar>
      </header>
       <body className="App-body">
         <Switch>
              <Route path='/profil' component={Compiler} />
              <Route path='/epreuves' component={Epreuves} />
              <Route path='/hackaton' component={Hackaton} />
          </Switch>
      </body>

    </div>
    </Router>
  );
}

export default App;
