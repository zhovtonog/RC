import React from 'react';

import { Header } from 'components'

let Settings = React.createClass({
    getInitialState: function() {
        return {};
    },
    
    render() {
      return (
          <div>
              <Header/>        
              <div>Settings</div>
          </div>
      );
    }
});


export default Settings;