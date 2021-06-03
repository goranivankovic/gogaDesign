
import React, { Component } from 'react'
import AllTogether from './AllTogether'
import {BrowserRouter,Route, Switch } from 'react-router-dom';

export default class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={AllTogether} />
          <Route path='*' render={()=><h1>404 Page not found!!!</h1>} />

         

        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
