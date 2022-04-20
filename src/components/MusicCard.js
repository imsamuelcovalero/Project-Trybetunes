// importa React, Props e CSS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';

// Cria uma classe responsável por renderizar as cartas
class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      musicaFavorita: false,
    };
  }

  componentDidMount() {
    const { favMusics, trackId } = this.props;
    const resultado = trackId.filter((elemento) => elemento === favMusics);
    if (resultado !== 0) {
      this.setState({
        musicaFavorita: true,
      });
    }
    // se positivo deixar true o estado
    // começa falso
  }

  onClickAddSong = async () => {
    console.log('entrou em onClickAddSong');
    const { checkLoading, trackId } = this.props;
    console.log('trackId', trackId);
    checkLoading(true);
    await addSong(trackId);
    checkLoading(false);
  };

  render() {
  // desestrutura as props
    const { trackName, previewUrl, trackId } = this.props;
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
            onClick={ this.onClickAddSong }
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
  favMusics: PropTypes.number.isRequired,
  checkLoading: PropTypes.func.isRequired,
};

// exporta a classe
export default MusicCard;
