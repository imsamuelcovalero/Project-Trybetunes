// Importa React, React-Router e Props
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Importa o componentes de navegação das pages
import Login from '../pages/Login/Login';
import Search from '../pages/Search/Search';
import Album from '../pages/Album/Album';
import Favorites from '../pages/Favorites/Favorites';
import Profile from '../pages/Profile/Profile';
import ProfileEdit from '../pages/ProfileEdit/ProfileEdit';
import NotFound from '../pages/NotFound';

class Content extends Component {
  render() {
    // Desestrutura as props
    const {
      userName,
      isSaveButtonDisabled,
      loading,
      onInputChange,
      checkLoading,
    } = this.props;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => (
            // Repassa as props recebidas do App para o componente da page Login
            // Junto passa as props do Router para poder fazer uso do History, por exemplo
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
        {/* Nas demais rotas apenas passa as props do Router */}
        <Route exact path="/search" component={ Search } />
        <Route path="/album/:id" component={ Album } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/profile/edit" component={ ProfileEdit } />
        {/* Path usado para direcionar qualquer entrada de rota diferente das estabelecidas */}
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

// Recebe as props
Content.propTypes = {
  userName: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  checkLoading: PropTypes.func.isRequired,
};

export default Content;
