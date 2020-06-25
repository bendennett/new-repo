import React from 'react';
import { Button, Navbar, Card, CardImg, Jumbotron } from 'reactstrap'
import { Route, Link} from 'react-router-dom'
import './App.css';
import Form from "./OnForm.js";

function App() {
  return (
    <>
    <Navbar color='primary'>
      <h1 style={{color: 'white'}}>WunderList</h1>
      <Link to={'/'}>
        <Button color ='light'>
          Home
        </Button>
      </Link>
      <Link to={'/user'}>
        <Button color='light'>
          Sign Up
        </Button>
      </Link>
    </Navbar>
    <Route exact path='/'>
      <Card>
        <Jumbotron>
          <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(240, 128, 128, .8)', position: 'absolute', left: '10%', top: '5%', width: '30%', padding: "2%", borderRadius: '6px'}}>
        <h1>Wunderlist</h1>
        <h4>Wunderlist 2.0 makes it super easy to remember all the little recurring to-dos and surprise to-dos that pop up unexpectedly.</h4>
        <Link to={'/user'}>
          <Button style={{borderRadius: '10px'}} color='primary'>
            Get Started?
          </Button>
        </Link>
        </div>
        <CardImg style={{width: '90%', margin: '0 auto'}}  src={require('./assets/planner.jpg')} />
     
        </Jumbotron>
      </Card>
    </Route>
    <Route path='/user'>
      <Form/>
    </Route>
      </>
       
         
     
  );
};

export default App;
