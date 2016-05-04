import React from 'react';

import { Header } from 'components'

let JobProducts = React.createClass({
    getInitialState: function() {
        return {};
    },
    
    render() {
      return (
          <div>
              <Header/>        
              <div>JobProducts</div>
          </div>
      );
    }
});


export default JobProducts;