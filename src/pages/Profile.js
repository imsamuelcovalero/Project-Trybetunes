// Faz os imports que serão usados
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';

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

  render() {
    const { loading, user } = this.state;
    const { history } = this.props;
    return (
      <div data-testid="page-profile">
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
              <div className="profile">
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.description}</p>
                <img data-testid="profile-image" src={ user.image } alt="user" />
                {/* Faz um link para editar o profile */}
                <div>
                  <Link to="/profile/edit">Editar perfil</Link>
                </div>
              </div>
            )
        }
      </div>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.shape.isRequired,
};

export default Profile;
