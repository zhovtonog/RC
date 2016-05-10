import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import $ from 'jquery'
import { loadCompanies } from 'redux/actions/Actions'


import { Header, Footer } from 'components'
import { PrintPDF } from 'components'

class Companies extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        let { state, dispatch } = this.props
        console.log(this.props);
        console.log(dispatch);
        $.ajax({
            method: "GET",
            url: "/api/companies.json",
            dataType : 'json',
            success : function(data){
               dispatch(loadCompanies(data));

            }
        })
    }
    render() {
        let { companies } = this.props
        console.log(companies)
        return (
            <div>
                <Header/>
                <PrintPDF/>
                <div>Companies</div>
                {companies.map((val, key) =>
                    <div key={key}>{val.Companies}</div>
                )}

                <Footer/>

            </div>
        )
    }
}

export default connect(
  state => ({ companies: state.Companies.companies
     })
)(Companies)
