// Faz os imports que serão usados
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading';
import { getFavoriteSongs, addSong, removeSong } from '../../services/favoriteSongsAPI';
import MusicCard from '../../components/MusicCard/MusicCard';
import { DivGlobal, SectionS } from './Style';

// Cria uma classe que cuida das página dos Favoritos
class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      musicasFavoritas: [],
    };
  }

  // No DidMount chama a função que faz a requisição das favoritas na API
  componentDidMount() {
    this.getFavorites();
  }

  // Faz a requisição das músicas favoritas e seta no state
  getFavorites = async () => {
    this.setState({
      loading: true,
    });
    const musicasFavs = await getFavoriteSongs();
    this.setState({
      loading: false,
    });
    this.setState({
      musicasFavoritas: musicasFavs,
    });
  }

  // Cria uma função para dar refresh nos favoritos
  onRefresh = (boolean) => {
    if (boolean === true) {
      this.getFavorites();
    }
  };

  // Cria uma função para trabalhar o clique no checkbox de favoritas no componente MusicCard
  // Recebe como parâmetro a música enviada pelo MusicCard como argumento
  onClickFavorites = async (musica) => {
    const { musicasFavoritas } = this.state;
    console.log('music', musica);
    // Filtra as músicas favoritas tendo como comparativo a música recebida como argumento
    const resultado = musicasFavoritas
      .filter((elemento) => elemento.trackId === musica.trackId);
    // Caso o resultado tenha algum elemento, a música faz parte das favoritas
    if (resultado.length !== 0) {
      console.log('condição favorites 1');
      this.setState({
        loading: true,
      });
      // Então remove a música dos favoritos
      await removeSong(musica);
      this.setState({
        loading: false,
      });
      // Após remover chama a função de refresh
      this.onRefresh(true);
      // Caso contrário a música do parâmetro não fazia parte dos favoritos e é então adicionada
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

  render() {
    const { loading, musicasFavoritas } = this.state;
    const { history } = this.props;
    return (
      <DivGlobal data-testid="page-favorites">
        {
          loading
            ? <Loading />
            : <Header history={ history } />
        }
        {
          loading
            ? <Loading />
            : (
              <SectionS>
                {/* Faz um map com as músicas dos favoritos e envia para o MusicCard as informações necessárias como Props */}
                <div id="pageTitle">
                  <h3>Músicas Favoritas:</h3>
                </div>
                <section id="musicCard">
                  {musicasFavoritas.map((musica) => (
                    <div id="musics" key={ musica.trackId }>
                      <MusicCard
                        trackName={ musica.trackName }
                        previewUrl={ musica.previewUrl }
                        trackId={ musica.trackId }
                        music={ musica }
                        onClickFavorites={ this.onClickFavorites }
                        // Já passa para o MusicCard se o checked em Favorita deve estar ativo (true) ou não (false)
                        /* lógica desenvolvida por Takashi */
                        checked={ musicasFavoritas
                          .some((favorita) => favorita.trackId === musica.trackId) }
                        // Passa para Musiccard qual componente está requisitando a renderização
                        wichComponent="favorites"
                      />
                    </div>
                  ))}
                </section>
              </SectionS>
            )
        }
      </DivGlobal>
    );
  }
}

Favorites.propTypes = {
  history: PropTypes.shape.isRequired,
};

export default Favorites;
