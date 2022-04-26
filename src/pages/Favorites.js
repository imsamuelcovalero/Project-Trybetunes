// Faz os imports que serão usados
import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';

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
    return (
      <div data-testid="page-favorites">
        {
          loading
            ? <Loading />
            : <Header />
        }
        {
          loading
            ? <Loading />
            : (
              <section>
                {/* Faz um map com as músicas dos favoritos e envia para o MusicCard as informações necessárias como Props */}
                {musicasFavoritas.map((musica) => (
                  <section key={ musica.trackId }>
                    <div className="musics-card">
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
                  </section>
                ))}
              </section>
            )
        }
      </div>
    );
  }
}

export default Favorites;
