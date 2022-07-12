// Faz os imports que serão usados
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import { getUser } from '../../services/userAPI';
import Loading from '../../components/Loading';
import { DivGlobal, DivS, ButtonEditProfile } from './Style';

// Cria uma classe que cuida da página do Profile
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      headerLoading: false,
      bodyLoading: false,
      user: [],
    };
  }

  // No DidMount chama a função que faz a requisição do usuário na API
  componentDidMount = async () => {
    this.setState({
      headerLoading: true,
      bodyLoading: true,
    });
    // Seta o usu[ario no estado
    const userX = await getUser();
    this.setState({
      headerLoading: false,
      bodyLoading: false,
      user: userX,
    });
  }

  onClickEditProfile = () => {
    const { history } = this.props;
    history.push('/profile/edit');
  }

  render() {
    const { bodyLoading, headerLoading, user } = this.state;
    const { history } = this.props;
    return (
      <DivGlobal data-testid="page-profile">
        {
          headerLoading
            ? (
              <div id="headerLoading">
                <Loading />
              </div>
            )
            : <Header history={ history } />
        }
        {
          bodyLoading
            ? (
              <div id="bodyLoading">
                <Loading />
              </div>
            )
            : (
              // Exibe as informações do usuário na tela
              <DivS className="profile">
                <div id="imageEditBtn">
                  {
                    user.image
                      ? (
                        <img
                          data-testid="profile-image"
                          src={ user.image }
                          alt="user"
                          id="image"
                        />
                      )
                      : <FaUserCircle size={ 80 } />
                  }
                  <ButtonEditProfile
                    type="button"
                    onClick={ () => this.onClickEditProfile() }
                  >
                    Editar perfil
                  </ButtonEditProfile>
                </div>
                <div id="itensPerfil">
                  <div>
                    <span id="title">Nome</span>
                    <p>{user.name}</p>
                  </div>
                  <div>
                    <span id="title">Email</span>
                    <p>{user.email}</p>
                  </div>
                  <div>
                    <span id="description">Descrição</span>
                    <p>{user.description}</p>
                  </div>
                </div>
                {/* Faz um link para editar o profile */}
              </DivS>
            )
        }
      </DivGlobal>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.shape.isRequired,
};

export default Profile;
