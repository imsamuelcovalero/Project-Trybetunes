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
      loading: false,
      user: [],
    };
  }

  // No DidMount chama a função que faz a requisição do usuário na API
  componentDidMount = async () => {
    this.setState({
      loading: true,
    });
    // Seta o usu[ario no estado
    const userX = await getUser();
    this.setState({
      loading: false,
      user: userX,
    });
  }

  onClickEditProfile = () => {
    const { history } = this.props;
    history.push('/profile/edit');
  }

  render() {
    const { loading, user } = this.state;
    const { history } = this.props;
    return (
      <DivGlobal data-testid="page-profile">
        {
          loading
            ? <Loading />
            : <Header history={ history } />
        }
        {
          loading
            ? <Loading />
            : (
              // Exibe as informações do usuário na tela
              <DivS className="profile">
                <div id="imageEditBtn">
                  {
                    user.image
                      ? <img data-testid="profile-image" src={ user.image } alt="user" />
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
