// Importa React, Link do Router, getUser da userAPI e o componente Loading
import React, { Component } from 'react';
import { CgProfile } from 'react-icons/cg';
import PropTypes from 'prop-types';
import { getUser } from '../../services/userAPI';
import Loading from '../Loading';
import { HeaderS, NavLinks, ButtonSearch, ButtonFavorites, ButtonProfile } from './Style';
import logo from '../../images/logoBranco.svg';

// Cria uma classe para mostrar a Header da página
class Header extends Component {
  // Inicia o estado
  constructor() {
    super();
    this.state = {
      userName: '',
      loading: false,
      navSelected: '',
    };
  }

  // Chama a API getUser dentro do componentDidMount
  componentDidMount = async () => {
    const { history: { location: pathname } } = this.props;
    if (pathname.pathname === '/search') {
      this.setState({
        navSelected: 'search',
      });
    }
    if (pathname.pathname === '/favorites') {
      this.setState({
        navSelected: 'favorites',
      });
    }
    if (pathname.pathname === '/profile') {
      this.setState({
        navSelected: 'profile',
      });
    }
    this.setState({
      loading: true,
    });
    const resposta = await getUser();
    this.setState({
      userName: resposta.name,
      loading: false,
    });
  }

  onClickSearch = () => {
    const { history } = this.props;
    history.push('/search');
  }

  onClickFavorites = () => {
    const { history } = this.props;
    history.push('/favorites');
  }

  onClickProfile = () => {
    const { history } = this.props;
    history.push('/profile');
  }

  render() {
    const { userName, loading, navSelected } = this.state;
    return (
      <HeaderS data-testid="header-component">
        {
          loading
            && <Loading />
        }
        <span id="topHeader">
          <img src={ logo } alt="Logo" />
          <div id="userIconName">
            <span id="icon">
              <CgProfile />
            </span>
            <span id="userName">
              <h4 data-testid="header-user-name">
                { userName }
              </h4>
            </span>
          </div>
        </span>
        {/* Exibe os links de navegação do cabeçalho */}
        <NavLinks>
          <ButtonSearch
            navSelected={ navSelected || 'search' }
            id="search"
            type="button"
            data-testid="link-to-search"
            onClick={ () => this.onClickSearch() }
          >
            Search
          </ButtonSearch>
          <ButtonFavorites
            navSelected={ navSelected }
            id="favorites"
            type="button"
            data-testid="link-to-favorites"
            onClick={ () => this.onClickFavorites() }
          >
            Favorites
          </ButtonFavorites>
          <ButtonProfile
            navSelected={ navSelected }
            id="profile"
            type="button"
            data-testid="link-to-profile"
            onClick={ () => this.onClickProfile() }
          >
            Profile
          </ButtonProfile>
        </NavLinks>
        {/* Exibe o username do estado */}
      </HeaderS>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Header;
