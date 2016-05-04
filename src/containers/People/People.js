/*import React from 'react';

import Header from './Header.js'

let People = React.createClass({
    getInitialState: function() {
        return {};
    },
    
    render() {
      return (
          <div>
              <Header/>        
              <div>People</div>
          </div>
      );
    }
});


export default People;

*/



import React from 'react'

import { Header } from 'components'

const People = () => (
    <div>
        <Header/>        
        <div>People</div>
    </div>
)

export default People

