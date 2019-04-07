import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Writers from "./Writers"
import {NotFound} from "./Errors"

export default class extends Component{
  state ={
    writers:[]
  }
  async componentDidMount(){

    const writers =  await (await fetch('http://localhost:4000/writers?_embed=texts')).json();
    console.log(writers)
    this.setState({writers})
  }
render(){
  return <BrowserRouter>
    <Fragment>
      <ul>
        <li>
         <Link to="/"> Home  </Link>
        </li>

        <li>
          <Link to="/writers"> Writers </Link>
        </li>
      </ul>
      <hr/>
      <Switch>
          <Route exact path="/" render={()=> <div> Home </div>} />
          <Route path="/writers" render={
            props => <Writers{ ...props} writers={this.state.writers}/>} />      
          <Route component={NotFound}/>
      </Switch>    
    </Fragment>
  </BrowserRouter>
  
}
}

