import React from 'react';

import { Header } from 'components'

let Warehouse = React.createClass({
    getInitialState: function() {
        return {};
    },
    
    render() {
      return (
          <div>
              <Header/>        
              <div>Warehouse</div>
          </div>
      );
    }
});


export default Warehouse;