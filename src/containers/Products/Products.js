import React from 'react';

import { Header } from 'components'

let Products = React.createClass({
    getInitialState: function() {
        return {};
    },
    
    render() {
      return (
          <div>
              <Header/>        
              <div>Products</div>
          </div>
      );
    }
});


export default Products;