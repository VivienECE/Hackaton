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
import Image from 'react-bootstrap/Image'
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
        <Navbar.Brand href="/">
        <img src="icone.svg" class="rounded float-left img-fluid" width="100" height="50" alt="Comment ça marche ?"/>
        </Navbar.Brand>
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
      <footer class="bg-primary text-center text-lg-start" variant="dark">


      <div class="form-group">
              <div class="container">
                <div class="row">
                <div class="col-sm-4 text-center text-white p-3" >
                      <h5 class="text-uppercase">Liens</h5>

                      <ul class="list-unstyled mb-0">
                        <li>
                          <a href="#!" class="text-white">Informations </a>
                        </li>
                        <li>
                          <a href="#!" class="text-white">A propos de nous</a>
                        </li>
                        <li>
                          <a href="#!" class="text-white">contact@hacknow.com</a>
                        </li>
                      </ul>
                    </div>
                  <div class="col-sm-4 text-center text-white p-5 ">
                  © 2021 Copyright : 
                  <a class="text-white" href="https://Hacknow.com/"> HackNow.com</a>                  </div>
                  <div class="col-sm-4">
                  <a href="/conseils"><img src="icone.svg" class="rounded float-left img-fluid" width="150" height="50" alt="conseils"/></a>
                  </div>
                </div>
              </div>
          </div>




    </footer>
      
    </div>
    </Router>


  );
}

export default App;
