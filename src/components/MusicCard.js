// importa React, Props
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Cria uma classe responsável por renderizar as músicas
class MusicCard extends Component {
  onClickOnCheck = async () => {
    const { wichComponent, music, onClickAlbum, onClickFavorites } = this.props;
    // Verifica se o a requisição de renderização veio de Album ou de Favorites
    // Se veio de Album chama a função onClickAlbum passando como argumento a música
    if (wichComponent === 'album') {
      onClickAlbum(music);
      // Se veio de Favorites chama a função onClickFavorites passando como argumento a música
    } else if (wichComponent === 'favorites') {
      onClickFavorites(music);
    }
  };

  render() {
  // Desestrutura as props
    const { trackName, previewUrl, trackId, checked } = this.props;
    return (
    // Cria uma sessão para as músicas
      <section className="music-card">
        <h4>{ trackName }</h4>
        {/* Implementação retirara do README para tocar o preview */}
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        {/* Cria uma label para a checkbox Favorita */}
        <label htmlFor="favoritas" className="favoritas">
          Favorita
          <input
            data-testid={ `checkbox-music-${trackId}` }
            id="favoritas"
            checked={ checked }
            type="checkbox"
            name="musicFavorite"
            // Quando tiver mudança chama uma função para verificar de qual componente pai veio a requisição de Renderização
            onChange={ this.onClickOnCheck }
          />
        </label>
      </section>
    );
  }
}

// Declara os tipos das props requeridas
MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  music: PropTypes.objectOf(PropTypes.shape).isRequired,
  checked: PropTypes.bool.isRequired,
  wichComponent: PropTypes.string.isRequired,
  onClickAlbum: PropTypes.func,
  onClickFavorites: PropTypes.func,
};

// Essa declaração de props é usada para props que não são requeridas
MusicCard.defaultProps = {
  onClickAlbum: PropTypes.func,
  onClickFavorites: PropTypes.func,
};

// exporta a classe
export default MusicCard;
