// importa React, Props e CSS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Cria uma classe responsável por renderizar as cartas
class MusicCard extends Component {
  render() {
    // desestrutura as props
    const {
      trackName,
      previewUrl,
    } = this.props;

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
      </section>
    );
  }
}

// declara os tipos das props
MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
};

// exporta a classe
export default MusicCard;
