import React from 'react';
import { Link } from 'react-router'

let Login = React.createClass({
    getInitialState: function() {
        return {};
    },
    
    render() {
      return (
          <div>
            
              
              <div>Login Page Content</div>
              <Link to="companies" activeClassName="current">companies</Link>
          </div>
      );
    }
});


export default Login;