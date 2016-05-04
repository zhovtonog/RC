import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import rootReducer from 'redux/redusers'

import {
    Login,
    Companies,
    People,
    Products,
    Jobs,
    PriceHistory,
    JobProducts,
    Warehouse,
    Log,
    Settings,
  } from 'containers';

let App = React.createClass({
    getInitialState: function() {
        return {};
    },
    
    render() {
      return (
          <div>
              {this.props.children}
          </div>
      );
    }
});



let store = createStore(rootReducer)


render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Login}/>
                <Route path="/companies" component={Companies}/>
                <Route path="/people" component={People}/>
                <Route path="/products" component={Products}/>
                <Route path="/jobs" component={Jobs}/>
                <Route path="/price_history" component={PriceHistory}/>
                <Route path="/job_proucts" component={JobProducts}/>
                <Route path="/warehouse" component={Warehouse}/>
                <Route path="/log" component={Log}/>
                <Route path="/settings" component={Settings}/>
            </Route>
        </Router>
    </Provider>

), document.getElementById('root'));
