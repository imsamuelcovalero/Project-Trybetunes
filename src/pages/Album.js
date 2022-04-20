import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      albumName: '',
      artistName: '',
      loading: false,
      musics: [],
    };
  }

  componentDidMount() {
    this.getMusicas();
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
    console.log('resposta', resposta);
    const respostaFiltrada = resposta.filter((elemento, index) => index !== 0);
    console.log('resposta2', respostaFiltrada);
    this.setState({
      musics: respostaFiltrada,
      loading: false,
      artistName: resposta[0].artistName,
      albumName: resposta[0].collectionName,
    });
  }

  render() {
    const { musics, artistName, loading, albumName} = this.state;
    // console.log(artistName, albumName);
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
          {musics.map((music, index) => (
            <section key={ index }>
              {/* <div data-testid="album-name">
                <p>
                  {artistName}
                  {albumName}
                </p>
              </div> */}
              <div className="musics-card">
                <MusicCard
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
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
