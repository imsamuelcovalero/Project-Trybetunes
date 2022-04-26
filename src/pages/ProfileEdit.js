import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';

class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      // user: [],
      name: '',
      email: '',
      image: '',
      description: '',
      isSaveButtonDisabled: true,
    };
  }

  componentDidMount = async () => {
    this.setState({
      loading: true,
    });
    const userX = await getUser();
    console.log('user', userX);
    this.setState({
      loading: false,
      // user: userX,
      name: userX.name,
      email: userX.email,
      image: userX.image,
      description: userX.description,
    }, () => {
      this.verifyErrors();
    });
  }

  onInputChange = (event) => {
    // cria uma constante que recebe o valor do event.target e caso seja checkbox recebe o valor do checked
    event.preventDefault();
    const { target } = event;
    // console.log('entrou em onInputChange');
    console.log('value', target.value);
    // muda o state atualizando os valores dos campos alterados
    this.setState({
      [target.name]: target.value,
      // callback para executar a verificação após a atualização assíncrona do state com as informações digitadas
    }, () => {
      this.verifyErrors();
    });
  }

  verifyErrors = () => {
    const { name, email, image, description } = this.state;
    // console.log(name, email, image, description);
    const pattern = /\S+@\S+.com/;
    // cria uma constante para receber em uma array o booleano de cada verificação
    const errorCases = [
      name === '',
      email === '',
      image === '',
      description === '',
      pattern.test(email) === false,
      // emailCheck === false,
    ];
    // caso alguma verificação for verdadeira, desabilita o botão de salvar
    const isDisabled = errorCases.some((err) => err === true);
    this.setState({
      isSaveButtonDisabled: isDisabled,
    });
  }

  onClickEnter = async (event) => {
    event.preventDefault();
    console.log('entrou');
    const { history } = this.props;
    const { name, email, image, description } = this.state;
    this.setState({
      loading: true,
    });
    await updateUser(
      {
        name,
        email,
        image,
        description,
      },
    );
    console.log('entrou');
    this.setState({
      loading: false,
    });
    history.push('/profile');
  }

  render() {
    const { loading, name, email, image, description,
      isSaveButtonDisabled } = this.state;
    // console.log('redirect', redirect);
    return (
      <div data-testid="page-profile-edit">
        {
          loading
            ? <Loading />
            : <Header />
        }
        {
          loading
            ? <Loading />
            : (
              <form>
                <input
                  data-testid="edit-input-name"
                  type="text"
                  name="name"
                  placeholder="Nome do Usuário"
                  value={ name }
                  onChange={ this.onInputChange }
                  required
                />
                <input
                  data-testid="edit-input-email"
                  type="email"
                  placeholder="usuario@usuario.com.br"
                  name="email"
                  value={ email }
                  onChange={ this.onInputChange }
                  required
                />
                <input
                  data-testid="edit-input-description"
                  type="text"
                  placeholder="Sobre mim"
                  name="description"
                  value={ description }
                  onChange={ this.onInputChange }
                  required
                />
                <input
                  data-testid="edit-input-image"
                  type="text"
                  placeholder="Insira um link"
                  name="image"
                  value={ image }
                  onChange={ this.onInputChange }
                  required
                />
                <button
                  type="submit"
                  data-testid="edit-button-save"
                  disabled={ isSaveButtonDisabled }
                  onClick={ this.onClickEnter }
                >
                  Salvar
                </button>
              </form>
            )
        }

      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape.isRequired,
};

export default ProfileEdit;
