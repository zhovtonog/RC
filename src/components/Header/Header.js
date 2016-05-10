import React from 'react'

import { Link } from 'react-router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadPage } from 'redux/actions/Actions'

import './Header.css';


class Header extends React.Component {
  componentDidMount() {

  }

  render() {
    let { todos, dispatch } = this.props

    return (
      <div>
        <Link to="companies" className="link" onClick={e => {
            dispatch(loadPage())
        }}>Companies</Link>
        <Link to="people" className="link" onClick={e => {
            dispatch(loadPage())
        }}>People</Link>
        <Link to="products" className="link" onClick={e => {
            dispatch(loadPage())
        }}>Products</Link>
        <Link to="jobs" className="link" onClick={e => {
            dispatch(loadPage())
        }}>Jobs</Link>
        <Link to="price_history" className="link" onClick={e => {
            dispatch(loadPage())
        }}>Price History</Link>
        <Link to="job_proucts" className="link" onClick={e => {
            dispatch(loadPage())
        }}>Job Products</Link>
        <Link to="warehouse" className="link" onClick={e => {
            dispatch(loadPage())
        }}>Warehouse</Link>
        <Link to="log" className="link" onClick={e => {
            dispatch(loadPage())
        }}>Log</Link>
        <Link to="settings" className="link" onClick={e => {
            dispatch(loadPage())
        }}>Settings</Link>
      </div>
    )
  }
}

export default connect(
  state => ({ todos: state })
)(Header)

//export default Header


