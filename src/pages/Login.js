// Importa além do usual a função createUser da userAPI e o componente Loading
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends Component {
  // Cria uma função para trabalhar a entrada de clique no botão entrar
  onClickEnter = async () => {
    // Desestrutura as props
    const { history, userName, checkLoading } = this.props;
    // Chama a função recebida por prop e passa true como argumento
    checkLoading(true);
    // Faz a requisitão para a API
    await createUser({ name: userName });
    // Redireciona para a rota /search
    history.push('/search');
  }

  render() {
    // Desestrutura as props
    const { userName, isSaveButtonDisabled, loading, onInputChange } = this.props;
    return (
      <div data-testid="page-login">
        {/* renderização condicional do loading, através da prop */}
        {
          loading
            ? <Loading />
            : (
              <form>
                {/* No form cria um input para receber o userName */}
                <input
                  data-testid="login-name-input"
                  type="text"
                  placeholder="Nome do Usuário"
                  name="userName"
                  value={ userName }
                  onChange={ onInputChange }
                  required
                />
                {/* Cria um botão de Entrar */}
                <button
                  type="button"
                  data-testid="login-submit-button"
                  disabled={ isSaveButtonDisabled }
                  onClick={ this.onClickEnter }
                >
                  Entrar
                </button>
              </form>
            )
        }
      </div>
    );
  }
}

// Declara os tipos das props
Login.propTypes = {
  history: PropTypes.shape.isRequired,
  userName: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  checkLoading: PropTypes.func.isRequired,
};

export default Login;
