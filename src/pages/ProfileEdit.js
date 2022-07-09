// Faz os imports que serão usados
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';

// Cria uma classe que cuida da página do Profile Edit
class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      name: '',
      email: '',
      image: '',
      description: '',
      isSaveButtonDisabled: true,
    };
  }

  // No DidMount faz request do user na API e seta o estado
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
      // Após isso verifica as condições de erro
      this.verifyErrors();
    });
  }

  // Cria uma função para verificar os valores iseridos nos inputs
  onInputChange = (event) => {
    // cria uma constante que recebe o evento
    event.preventDefault();
    const { target } = event;
    // muda o state atualizando com os valores dos campos alterados
    this.setState({
      [target.name]: target.value,
      // callback para executar a verificação após a atualização assíncrona do state com as informações digitadas
    }, () => {
      this.verifyErrors();
    });
  }

  // Cria uma função para verificar as condições para o botão Salvar ficar habilitado
  verifyErrors = () => {
    const { name, email, image, description } = this.state;
    // Pattern criada para validar o formato da entrada de email
    const pattern = /\S+@\S+.com/;
    // Cria uma constante para receber em uma array o booleano de cada verificação
    const errorCases = [
      name === '',
      email === '',
      image === '',
      description === '',
      pattern.test(email) === false,
    ];
    // caso alguma verificação for verdadeira, desabilita o botão de salvar, caso contrário habilita
    const isDisabled = errorCases.some((err) => err === true);
    this.setState({
      isSaveButtonDisabled: isDisabled,
    });
  }

  // Cria uma função que recebe o evento de clique
  onClickEnter = async (event) => {
    event.preventDefault();
    // Desestrutura history das props, que será usada para redirecionar a página ao final
    const { history } = this.props;
    const { name, email, image, description } = this.state;
    this.setState({
      loading: true,
    });
    // Insere na função updateUser da API os dados do usuário atualizados
    await updateUser(
      {
        name,
        email,
        image,
        description,
      },
    );
    this.setState({
      loading: false,
    });
    // Redireciona para a página do Profile
    history.push('/profile');
  }

  render() {
    const { loading, name, email, image, description, isSaveButtonDisabled } = this.state;
    const { history } = this.props;
    return (
      <div data-testid="page-profile-edit">
        {
          loading
            ? <Loading />
            : <Header history={ history } />
        }
        {
          loading
            ? <Loading />
            : (
              // Exibe o form para alteração dos dados
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
                  // Habilitado ou desabilitado conforme as condições de verificação
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

// Especifica o tipo da prop history
ProfileEdit.propTypes = {
  history: PropTypes.shape.isRequired,
};

export default ProfileEdit;
