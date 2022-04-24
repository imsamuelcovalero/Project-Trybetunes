import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      user: [],
    };
  }

  componentDidMount = async () => {
    this.setState({
      loading: true,
    });
    const userX = await getUser();
    // console.log('user', userX);
    this.setState({
      loading: false,
      user: userX,
    });
  }

  render() {
    const { loading, user } = this.state;
    return (
      <div data-testid="page-profile">
        {
          loading
            && <Loading />
        }
        <Header />
        <div className="profile">
          teste
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.description}</p>
          <img data-testid="profile-image" src={ user.image } alt="user" />
          <div>
            <Link to="/profile/edit">Editar perfil</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
