import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

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
    this.setState({
      loading: true,
    });
    const musicas = await getFavoriteSongs();
    console.log('musicas salvas', musicas);
    this.setState({
      loading: false,
      musicasFavoritas: musicas,
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

  checkLoading = (boolean) => {
    this.setState({
      loading: boolean,
    });
  }

  render() {
    const { musics, artistName, loading, albumName, musicasFavoritas } = this.state;
    // console.log(musicasFavoritas);
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
                  checkLoading={ this.checkLoading }
                />
              </div>
            </section>
          ))}
        </section>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape.isRequired,
};

export default Album;
