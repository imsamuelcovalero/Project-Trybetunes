// importa React, Props e CSS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Cria uma classe responsável por renderizar as cartas
class AlbumCard extends Component {
  render() {
    // desestrutura as props
    const {
      artwork,
      collectionName,
      artistName,
    } = this.props;

    return (
      // cria uma sessão para os álbums
      <section className="albumCard">
        {/* Exibe o AlbumCard */}
        <img src={ artwork } alt={ collectionName } />
        <h4>{ collectionName }</h4>
        <p>{ artistName }</p>
      </section>
    );
  }
}

// declara os tipos das props
AlbumCard.propTypes = {
  artwork: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};

// exporta a classe
export default AlbumCard;
