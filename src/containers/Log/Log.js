import React from 'react';

import { Header } from 'components'

let Log = React.createClass({
    getInitialState: function() {
        return {};
    },
    
    render() {
      return (
          <div>
              <Header/>        
              <div>Log</div>
          </div>
      );
    }
});


export default Log;