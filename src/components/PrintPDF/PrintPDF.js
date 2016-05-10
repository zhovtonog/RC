import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadPage } from 'redux/actions/Actions';

import $ from 'jquery'

class PrintPDF extends React.Component {
  componentDidMount() {

  }

  PrintPDF(){
    console.log('PrintPDF');
    let doc = new jsPDF('landscape');

    let content = $('#root').clone().get(0);


    $(content).find('.remove-from-pdf').remove().end();
    //console.log($(content).find('.hide-on-pdf'));


    var specialElementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    };

    doc.fromHTML(content, 15, 15, {
      'width': 170,
      'elementHandlers': specialElementHandlers
    });
    doc.save('print.pdf');

  }

  render() {

    return (
      <div>
           <button className="remove-from-pdf" onClick={this.PrintPDF.bind(this)}>Print PDF</button>
      </div>
    )
  }
}

export default connect(
  state => ({ todos: state })
)(PrintPDF)
