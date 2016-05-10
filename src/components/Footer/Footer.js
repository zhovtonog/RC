import React from 'react'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadPage } from 'redux/actions/Actions'

import './Footer.css';


class Footer extends React.Component {
  componentDidMount() {

  }

  render() {
    let { todos, dispatch } = this.props

    return (
      <div className="show-on-pdf">
        Footer text
      </div>
    )
  }
}

export default connect(
  state => ({ todos: state })
)(Footer)
