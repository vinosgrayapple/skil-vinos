import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'

class Dummy extends React.Component {
  styleButton = {
    borderRadius: '19px',
    paddingTop: '3px',
    paddingBottom: '3px',
    paddingLeft: '3px',
    margin: '5px'
  }

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.addOne = this.addOne.bind(this);
  }

  addOne = () => this.setState(ps => ({ counter: ps.counter + Math.floor((Math.random() * 10)) }))

  render() {
    return (
      <div>
        <Head title="Hello" />
        <div className="row justify-content-center">
          <div className="col col-lg-6">
            <div className="alert alert-primary display-1  text-center" role="alert">{this.state.counter}</div>
            <button type="button" onClick={this.addOne} className="btn btn-block btn-lg btn-raised btn-primary">
              <i className="fas fa-spinner text-primary rounded-circle bg-white mr-1" style={{ padding: '7px' }} />
              ADD
            </button>
          </div>
        </div>
      </div>
    )
  }
}
Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
