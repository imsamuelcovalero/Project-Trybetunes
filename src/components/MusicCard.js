// importa React, Props e CSS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Loading from './Loading';
// import { Redirect } from 'react-router-dom';
// import { getFavoriteSongs } from '../services/favoriteSongsAPI';

// Cria uma classe responsável por renderizar as cartas
class MusicCard extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     musicaFavorita: false,
  //   };
  // }

  // componentDidMount() {
  //   this.verificaMusicas();
  // }

  // verificaMusicas = async () => {
  //   const { music, checkLoading } = this.props;
  //   checkLoading(true);
  //   const musicasFavs = await getFavoriteSongs();
  //   console.log('musicas favoritas', musicasFavs);
  //   checkLoading(false);
  //   console.log('music', music);
  //   const resultado = musicasFavs
  //     .filter((elemento) => elemento.trackId === music.trackId);
  //   // console.log('resultado', resultado);
  //   if (resultado.length !== 0) {
  //     this.setState({
  //       musicaFavorita: true,
  //     });
  //   }
  // }

  onClickOnCheck = async () => {
    console.log('entrou em onClickOnCheck');
    // const { musicaFavorita } = this.state;
    const { wichComponent, music, onClickAlbum, onClickFavorites } = this.props;
    console.log('wichComponent', wichComponent);
    // const { music } = target;
    // const { checkLoading, music, getFavorites } = this.props;
    // console.log('favMusics', musicaFavoritas);
    console.log('music', music);
    // const resultado = musicaFavorita
    //   .filter((elemento) => elemento.trackId === music.trackId);
    // console.log('resultado', resultado);
    if (wichComponent === 'album') {
      console.log('clicou wichComponent1');
      onClickAlbum(music);
      // onRefresh(true);
    } else if (wichComponent === 'favorites') {
      console.log('clicou wichComponent2');
      onClickFavorites(music);
    }
  };

  render() {
  // desestrutura as props
    const { trackName, previewUrl, trackId, checked } = this.props;
    // console.log('checked', checked);
    // const { musicaFavorita } = this.state;
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
            checked={ checked }
            type="checkbox"
            name="musicFavorite"
            // value={ music }
            onChange={ this.onClickOnCheck }
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
  // onClickOnCheck: PropTypes.func.isRequired,
  // onRefresh: PropTypes.func,
  music: PropTypes.objectOf(PropTypes.shape).isRequired,
  checked: PropTypes.bool.isRequired,
  wichComponent: PropTypes.string.isRequired,
  onClickAlbum: PropTypes.func,
  onClickFavorites: PropTypes.func,
};

MusicCard.defaultProps = {
  onClickAlbum: PropTypes.func,
  onClickFavorites: PropTypes.func,
};

// exporta a classe
export default MusicCard;
