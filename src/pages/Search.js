import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import AlbumCard from '../components/AlbumCard';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      artistname2: '',
      isSaveButtonDisabled: true,
      loading: false,
      albuns: [],
    };
  }

  onInputChange = ({ target }) => {
    // muda o state atualizando os valores dos campos alterados
    this.setState({
      [target.name]: target.value,
      // callback para executar a verificação após a atualização assíncrona do state com as informações digitadas
    }, () => {
      // desestrutura o state
      const { artistName } = this.state;

      // atribui valores a constantes para a realização das verificações
      const MINLETTERS = 2;

      // console.log('artistName.length', artistName.length);
      if (artistName.length >= MINLETTERS) {
        this.setState({
          artistname2: artistName,
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  }

  onClickSearch = async ({ target }) => {
    const { artistName } = this.state;
    // console.log('artistName', artistName);
    this.setState({
      loading: true,
    });
    const resposta = await searchAlbumsAPI(artistName);
    // console.log(resposta);
    this.setState({
      albuns: resposta,
      loading: false,
      artistName: '',
    });
    target.value = '';
  }

  render() {
    const { artistName, isSaveButtonDisabled, loading, albuns, artistname2 } = this.state;
    // const { collectionId } = albuns;
    // console.log('collectionId', albuns.artistName);
    return (
      <div data-testid="page-search">
        {
          loading
            && <Loading />
        }
        <Header />
        <h1>SEARCH</h1>
        <form>
          <input
            data-testid="search-artist-input"
            type="text"
            placeholder="Nome do Artista"
            name="artistName"
            value={ artistName }
            onChange={ this.onInputChange }
            required
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ isSaveButtonDisabled }
            onClick={ this.onClickSearch }
          >
            Pesquisar
          </button>
          { albuns.length === 0
            ? (<p>Nenhum álbum foi encontrado</p>)
            : (
              <section>
                <p>
                  {`Resultado de álbuns de: ${artistname2}`}
                </p>
                {albuns.map((album, index) => (
                  <section key={ index }>
                    <section>
                      <Link
                        to={ `/album/${album.collectionId}` }
                        data-testid={ `link-to-album-${album.collectionId}` }
                      >
                        <div className="album-card">
                          <AlbumCard
                            artwork={ album.artworkUrl100 }
                            collectionName={ album.collectionName }
                            artistName={ album.artistName }
                          />
                        </div>
                      </Link>
                    </section>
                  </section>
                ))}
              </section>)}
        </form>
      </div>
    );
  }
}

export default Search;
