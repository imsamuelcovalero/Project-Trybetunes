import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      musicasFavoritas: [],
    };
  }

  componentDidMount() {
    this.getFavorites();
  }

  getFavorites = async () => {
    this.setState({
      loading: true,
    });
    const musicasFavs = await getFavoriteSongs();
    // console.log('musicas salvas', musicasFavs);
    this.setState({
      loading: false,
    });
    this.setState({
      musicasFavoritas: musicasFavs,
    });
  }

  onRefresh = (boolean) => {
    console.log('entrou em onRefresh');
    const xlablau = boolean;
    if (xlablau === true) {
      this.getFavorites();
      // this.setState({});
    }
  };

  onClickFavorites = async (musica) => {
    console.log('entrou em onClickFavorites');
    const { musicasFavoritas } = this.state;
    // const { wichComponent, checkLoading, music } = this.props;
    // const { music } = target;
    // const { checkLoading, music, getFavorites } = this.props;
    // console.log('favMusics', musicaFavoritas);
    console.log('music', musica);
    const resultado = musicasFavoritas
      .filter((elemento) => elemento.trackId === musica.trackId);
    console.log('resultado', resultado);
    if (resultado.length !== 0) {
      console.log('condição favorites 1');
      this.setState({
        loading: true,
      });
      await removeSong(musica);
      this.setState({
        loading: false,
      });
      this.onRefresh(true);
    } else {
      console.log('condição favorites 2');
      this.setState({
        loading: true,
      });
      await addSong(musica);
      this.setState({
        loading: false,
      });
    }
  };

  // checkLoading = (boolean) => {
  //   this.setState({
  //     loading: boolean,
  //   });
  // }

  render() {
    const { loading, musicasFavoritas } = this.state;
    // console.log('musicasFavoritas_estado', musicasFavoritas);
    // const { musics } = this.props;
    return (
      <div data-testid="page-favorites">
        {
          loading
           && <Loading />
        }
        <Header />
        <h1>FAVORITES</h1>
        <section>
          {musicasFavoritas.map((musica) => (
            <section key={ musica.trackId }>
              <div className="musics-card">
                <MusicCard
                  trackName={ musica.trackName }
                  previewUrl={ musica.previewUrl }
                  trackId={ musica.trackId }
                  music={ musica }
                  onClickFavorites={ this.onClickFavorites }
                  // onRefresh={ this.onRefresh }
                  checked={ musicasFavoritas
                    .some((favorita) => favorita.trackId === musica.trackId) }
                  wichComponent="favorites"
                />
              </div>
            </section>
          ))}
        </section>
      </div>
    );
  }
}

// MusicCard.propTypes = {
//   musics: PropTypes.shape,
// };

export default Favorites;
