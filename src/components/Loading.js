import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Route, Switch } from 'react-router-dom';

class Loading extends Component {
  render() {
    // const { loading } = this.state;
    // const loadingElement = <span>Loading...</span>;
    return (
      <div className="Loading">
        <span>Carregando...</span>
      </div>
    );
  }
}

// Loading.propTypes = {
//   estado: PropTypes.bool.isRequired,
// };

export default Loading;
