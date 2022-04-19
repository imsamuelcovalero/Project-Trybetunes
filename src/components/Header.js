import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.getName();
  }

  getName = async () => {
    // console.log(this.props);
    // const { checkLoading } = this.props;
    // console.log('checkLoading', checkLoading);
    // checkLoading(true);
    this.setState({
      loading: true,
    });
    const resposta = await getUser();
    console.log(resposta);
    this.setState({
      userName: resposta.name,
      loading: false,
    });
  };

  render() {
    // const { loading } = this.props;
    const { userName, loading } = this.state;
    console.log('userName', userName);
    return (
      <header data-testid="header-component">
        {
          loading
            && <Loading />
        }
        <h4 data-testid="header-user-name">
          { userName }
        </h4>
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

// Header.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   checkLoading: PropTypes.func.isRequired,
// };

export default Header;
