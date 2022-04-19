import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from '../pages/Login';
import Search from '../pages/Search';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
import NotFound from '../pages/NotFound';
// import data from '../data';

class Content extends Component {
  render() {
    const {
      userName,
      isSaveButtonDisabled,
      loading,
      onInputChange,
      checkLoading,
    } = this.props;
    return (
      <main className="Content">
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (
              <Login
                { ...props }
                userName={ userName }
                isSaveButtonDisabled={ isSaveButtonDisabled }
                loading={ loading }
                onInputChange={ onInputChange }
                checkLoading={ checkLoading }
              />
            ) }
          />
          <Route exact path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

Content.propTypes = {
  userName: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  checkLoading: PropTypes.func.isRequired,
};

export default Content;
