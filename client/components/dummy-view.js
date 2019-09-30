import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMugHot } from '@fortawesome/free-solid-svg-icons'

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
        <div className="row justify-content-center" style={{ padding: '20px' }}>
          <div className="col col-lg-6">
            <div className="alert alert-primary display-1  text-center" role="alert">{this.state.counter} <FontAwesomeIcon icon={faMugHot} className="" /></div>
            <button type="button" onClick={this.addOne} className="btn btn-block btn-lg btn-raised btn-primary">
              <FontAwesomeIcon icon={faCoffee} className="" /> ADD
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
