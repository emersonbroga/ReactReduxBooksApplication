import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {

    if (!this.props.book) {
      return <div className="book-detail col-sm-8"><h3>Select a book to get started.</h3></div>;
    }

    return (
      <div className="book-detail col-sm-8">
        <h3>{this.props.book.title}</h3>
        <div><b>Pages</b>: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
