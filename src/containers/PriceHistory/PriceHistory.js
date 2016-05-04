import React from 'react';

import { Header } from 'components'

let PriceHystory = React.createClass({
    getInitialState: function() {
        return {};
    },
    
    render() {
      return (
          <div>
              <Header/>        
              <div>PriceHystory</div>
          </div>
      );
    }
});


export default PriceHystory;