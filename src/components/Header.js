// Importa React, Link do Router, getUser da userAPI e o componente Loading
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

// Cria uma classe para mostrar a Header da página
class Header extends Component {
  // Inicia o estado
  constructor() {
    super();
    this.state = {
      userName: '',
      loading: false,
    };
  }

  // Chama a API getUser dentro do componentDidMount
  componentDidMount = async () => {
    this.setState({
      loading: true,
    });
    const resposta = await getUser();
    this.setState({
      userName: resposta.name,
      loading: false,
    });
  }

  render() {
    const { userName, loading } = this.state;
    return (
      <header data-testid="header-component">
        {
          loading
            && <Loading />
        }
        {/* Exibe o username do estado */}
        <h4 data-testid="header-user-name">
          { userName }
        </h4>
        {/* Exibe os links de navegação do cabeçalho */}
        <section className="Links">
          <h4>Links de Navegação</h4>
          <nav>
            <Link to="/search" data-testid="link-to-search">Search</Link>
            <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
            <Link to="/profile" data-testid="link-to-profile">Profile</Link>
          </nav>
        </section>
      </header>
    );
  }
}

export default Header;
