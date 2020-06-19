import React from 'react';
import { Button, Navbar, Card, } from 'reactstrap'
import { Route, Link} from 'react-router-dom'
import './App.css';
import Form from "./OnForm.js";

function App() {
  return (
    <>
    <Navbar color='successs'>
      <h1 style={{ color: 'white'}}>WunderList</h1>
      <Link to={'/'}>
        <Button color ="success">
          Home
        </Button>
      </Link>
    </Navbar>
    <Route exact path='/'>
      <Card>
        <Link to={'/user'}>
          <Button color='success' style={{position: 'absolute', left: '50%', top: '50%'}}>
            Get Started?
          </Button>
        </Link>
      </Card>
    </Route>
    <Route path='/user'>
      <Form/>
    </Route>
        <h1>Wunderlist</h1>
        <h2>Wunderlist 2.0 makes it super easy to remember all the little recurring to-dos and surprise to-dos that pop up unexpectedly</h2>
       
      </>
       
         
     
  );
};

export default App;
