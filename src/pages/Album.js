import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
// import Favorites from './Favorites';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      albumName: '',
      artistName: '',
      loading: false,
      musics: [],
      musicasFavoritas: [],
    };
  }

  async componentDidMount() {
    this.getMusicas();
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

  getMusicas = async () => {
    console.log('entrou em getMusicas');
    // console.log(this.props);
    const { match: { params: { id } } } = this.props;
    console.log(id);
    this.setState({
      loading: true,
    });
    const resposta = await getMusics(id);
    // console.log('resposta', resposta);
    const respostaFiltrada = resposta.filter((elemento, index) => index !== 0);
    // console.log('resposta2', respostaFiltrada);
    this.setState({
      musics: respostaFiltrada,
      loading: false,
      artistName: resposta[0].artistName,
      albumName: resposta[0].collectionName,
    });
  }

  onRefresh = (boolean) => {
    console.log('entrou em onRefresh');
    const xlablau = boolean;
    if (xlablau === true) {
      // this.getMusicas();
      this.getFavorites();
      this.setState({});
    }
  };

  onClickAlbum = async (music) => {
    console.log('entrou em onClickAlbum');
    const { musicasFavoritas } = this.state;
    // const { wichComponent, checkLoading, music } = this.props;
    // const { music } = target;
    // const { checkLoading, music, getFavorites } = this.props;
    // console.log('favMusics', musicaFavoritas);
    console.log('music', music);
    const resultado = musicasFavoritas
      .filter((elemento) => elemento.trackId === music.trackId);
    console.log('resultado', resultado);
    if (resultado.length !== 0) {
      console.log('condição album 1');
      this.setState({
        loading: true,
      });
      await removeSong(music);
      this.setState({
        loading: false,
      });
      this.onRefresh(true);
    } else {
      console.log('condição album 2');
      this.setState({
        loading: true,
      });
      await addSong(music);
      this.setState({
        loading: false,
      });
      this.onRefresh(true);
    }
  };

  // checkLoading = (boolean) => {
  //   this.setState({
  //     loading: boolean,
  //   });
  // }

  render() {
    const { musics, artistName, loading, albumName, musicasFavoritas } = this.state;
    // console.log('favoritas album', musicasFavoritas);
    // console.log('musics', musics);
    return (
      <div data-testid="page-album">
        {
          loading
            && <Loading />
        }
        <Header />
        <h1>ALBUM</h1>
        <section>
          <p data-testid="artist-name">
            {`Nome do Artista: ${artistName}`}
          </p>
          <p data-testid="album-name">
            {`Nome do Album: ${albumName}`}
          </p>
          {musics.map((music) => (
            <section key={ music.trackId }>
              <div className="musics-card">
                <MusicCard
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                  trackId={ music.trackId }
                  music={ music }
                  favMusics={ musicasFavoritas }
                  onClickAlbum={ this.onClickAlbum }
                  checked={ musicasFavoritas
                    .some((favorita) => favorita.trackId === music.trackId) }
                  wichComponent="album"
                />
              </div>
            </section>
          ))}
        </section>
        {/* <Favorites musics={ musics } /> */}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape.isRequired,
};

export default Album;
