// importa React, Props e CSS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

// Cria uma classe responsável por renderizar as cartas
class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      musicaFavorita: false,
    };
  }

  async componentDidMount() {
    const { music, checkLoading } = this.props;
    checkLoading(true);
    const musicasFavs = await getFavoriteSongs();
    console.log('musicas favoritas', musicasFavs);
    checkLoading(false);
    console.log('music', music);
    const resultado = musicasFavs
      .filter((elemento) => elemento.trackId === music.trackId);
    console.log('resultado', resultado);
    if (resultado.length !== 0) {
      this.setState({
        musicaFavorita: true,
      });
    }
  }

  onClickOnCheck = async () => {
    console.log('entrou em onClickAddSong');
    const { musicaFavorita } = this.state;
    const { checkLoading, music } = this.props;
    // console.log('favMusics', favMusics);
    console.log('music', music);
    if (musicaFavorita === true) {
      checkLoading(true);
      await removeSong(music);
      checkLoading(false);
      (this.setState({
        musicaFavorita: false,
      }));
    } else {
      checkLoading(true);
      await addSong(music);
      checkLoading(false);
      (this.setState({
        musicaFavorita: true,
      }));
    }
  };

  render() {
  // desestrutura as props
    const { trackName, previewUrl, trackId } = this.props;
    // console.log('music2', music);
    const { musicaFavorita } = this.state;
    return (
    // cria uma sessão para os álbums
      <section className="music-card">
        {/* Exibe o MusicCard */}
        <h4>{ trackName }</h4>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor="favoritas" className="favoritas">
          Favorita
          <input
            data-testid={ `checkbox-music-${trackId}` }
            id="favoritas"
            checked={ musicaFavorita }
            type="checkbox"
            name="musicFavorite"
            onClick={ this.onClickOnCheck }
          />
        </label>
      </section>
    );
  }
}

// declara os tipos das props
MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  //   favMusics: PropTypes.shape.isRequired,
  checkLoading: PropTypes.func.isRequired,
  music: PropTypes.shape.isRequired,
};

// exporta a classe
export default MusicCard;
