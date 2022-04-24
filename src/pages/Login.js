import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
// import { Route, Switch } from 'react-router-dom';

class Login extends Component {
  onClickEnter = async () => {
    const { history, userName, checkLoading } = this.props;
    // console.log('history', history);
    // console.log('userName', userName);
    checkLoading(true);
    await createUser({ name: userName });
    history.push('/search');
  }

  render() {
    const { userName, isSaveButtonDisabled, loading, onInputChange } = this.props;
    return (
      <div data-testid="page-login">
        {/* renderização condicional */}
        {
          loading
            && <Loading />
        }
        <h1>HOME PAGE</h1>
        <form>
          <input
            data-testid="login-name-input"
            type="text"
            placeholder="Nome do Usuário"
            name="userName"
            value={ userName }
            onChange={ onInputChange }
            required
          />
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ isSaveButtonDisabled }
            onClick={ this.onClickEnter }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape.isRequired,
  userName: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  checkLoading: PropTypes.func.isRequired,
};

export default Login;
