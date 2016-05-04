import React from 'react';

import { Header } from 'components'

let Jobs = React.createClass({
    getInitialState: function() {
        return {};
    },
    
    render() {
      return (
          <div>
              <Header/>        
              <div>Jobs</div>
          </div>
      );
    }
});


export default Jobs;