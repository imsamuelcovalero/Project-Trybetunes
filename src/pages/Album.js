// Faz os imports, inclusive de 2 APIs diferentes e do MusicCard
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI';

// Cria uma classe que exiba as músicas do álbum selecionado
class Album extends Component {
  constructor() {
    // Inicia o state
    super();
    this.state = {
      albumName: '',
      artistName: '',
      loading: false,
      musics: [],
      musicasFavoritas: [],
    };
  }

  // Dentro do DidMount chama getMusicas e getFavorites
  async componentDidMount() {
    this.getMusicas();
    this.getFavorites();
  }

  // Cria uma função que consulta a API buscando pelas músicas salvas nos favoritos
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

  // Cria uma função que consulta a API buscando pelas músicas do álbum selecionado
  getMusicas = async () => {
    // IMPORTANTE: Desestrutura as prop recebida pelo Router até chegar no id, presente no componente match
    const { match: { params: { id } } } = this.props;
    this.setState({
      loading: true,
    });
    const resposta = await getMusics(id);
    // Após recebeu a requisição da API faz um filtro removendo o primeiro elemento pois ele não é uma música, apenas outras informações
    const respostaFiltrada = resposta.filter((elemento, index) => index !== 0);
    // Seta o state com o reultado, pegando o nome do artista e do álbum através do primeiro elemento da resposta (sem filtrar)
    // pra não ter problema nos testes
    this.setState({
      musics: respostaFiltrada,
      loading: false,
      artistName: resposta[0].artistName,
      albumName: resposta[0].collectionName,
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
  onClickAlbum = async (music) => {
    const { musicasFavoritas } = this.state;
    // Filtra as músicas favoritas tendo como comparativo a música recebida como argumento
    const resultado = musicasFavoritas
      .filter((elemento) => elemento.trackId === music.trackId);
    // Caso o resultado tenha algum elemento, a música faz parte das favoritas
    if (resultado.length !== 0) {
      this.setState({
        loading: true,
      });
      // Então remove a música dos favoritos
      await removeSong(music);
      this.setState({
        loading: false,
      });
      this.onRefresh(true);
      // Caso contrário a música do parâmetro não fazia parte dos favoritos e é então adicionada
    } else {
      this.setState({
        loading: true,
      });
      await addSong(music);
      this.setState({
        loading: false,
      });
      // Por fim chama a função de refresh
      this.onRefresh(true);
    }
  };

  render() {
    const { musics, artistName, loading, albumName, musicasFavoritas } = this.state;
    return (
      <div data-testid="page-album">
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
                {/* Exibe os nomes do artista e do álbum */}
                <p data-testid="artist-name">
                  {`Nome do Artista: ${artistName}`}
                </p>
                <p data-testid="album-name">
                  {`Nome do Album: ${albumName}`}
                </p>
                {/* Faz um map com as músicas do álbum e envia para o MusicCard as informações necessárias como Props */}
                {musics.map((music) => (
                  <section key={ music.trackId }>
                    <div className="musics-card">
                      <MusicCard
                        trackName={ music.trackName }
                        previewUrl={ music.previewUrl }
                        trackId={ music.trackId }
                        music={ music }
                        favMusics={ musicasFavoritas }
                        onClickAlbum={ this.onClickAlbum }
                        // Já passa para o MusicCard se o checked em Favorita deve estar ativo (true) ou não (false)
                        /* lógica desenvolvida por Takashi */
                        checked={ musicasFavoritas
                          .some((favorita) => favorita.trackId === music.trackId) }
                        // Passa para Musiccard qual componente está requisitando a renderização
                        wichComponent="album"
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

Album.propTypes = {
  match: PropTypes.shape.isRequired,
};

export default Album;
