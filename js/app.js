import React from 'react';
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'



let app = React.createClass({
    getInitialState: function() {
        return {};
    },
    
    render() {
      return (
          <div>jhklasjkhdask</div>
      );
    }
});


render((
  <Router>
    <Route path="/" component={app}>
    </Route>
  </Router>
), document.getElementById('qqq'));
