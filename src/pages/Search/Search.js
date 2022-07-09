// Faz os imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoIosSearch } from 'react-icons/io';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading';
// import AlbumCard from '../../components/AlbumCard';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { DivGlobal, AlbumCardS } from './Style';

// Cria uma classe para realizar a pesquisa dos artistas
class Search extends Component {
  // Seta o state no constructor
  constructor() {
    super();
    this.state = {
      artistName: '',
      artistNameDisplay: '',
      isSaveButtonDisabled: true,
      loading: false,
      albuns: [],
    };
  }

  // Cria uma função para lidar com os valores de entrada
  onInputChange = ({ target }) => {
    // muda o state atualizando os valores dos campos alterados
    this.setState({
      [target.name]: target.value,
      // Callback para executar a verificação após a atualização assíncrona do state com as informações digitadas
    }, () => {
      // Desestrutura o state
      const { artistName } = this.state;

      // Atribui valores a constantes para a realização das verificações
      const MINLETTERS = 2;

      // Se o valor de entrada foi maior do que dois passa o nome para o artistname2 e habilita o botão Pesquisar
      if (artistName.length >= MINLETTERS) {
        this.setState({
          artistName,
          isSaveButtonDisabled: false,
        });
        // Caso contrário deixa desabilitado o botão
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  }

  // Cria uma função resposável por lidar com o valor de entrada relacionado ao botão Entrar
  onClickSearch = async ({ target }) => {
    const { artistName } = this.state;
    this.setState({
      loading: true,
    });
    //  Consulta a API com o valor de entrada recebido
    const resposta = await searchAlbumsAPI(artistName);
    this.setState({
      albuns: resposta,
      loading: false,
      artistNameDisplay: artistName,
      artistName: '',
    });
    // Apaga o campo digitado
    target.value = '';
  }

  render() {
    const { artistName, isSaveButtonDisabled, loading, albuns,
      artistNameDisplay } = this.state;
    const { history } = this.props;
    return (
      <DivGlobal data-testid="page-search">
        {/* Cria o form de recebimento do nome do artista com um botão de Pesquisar */}
        <Header history={ history } />
        <form>
          <span id="artistSearch">
            <input
              id="input-search"
              data-testid="search-artist-input"
              type="text"
              placeholder="Nome do Artista"
              name="artistName"
              value={ artistName }
              onChange={ this.onInputChange }
              required
            />
            <span id="searchIcon">
              <IoIosSearch />
            </span>
          </span>
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ isSaveButtonDisabled }
            onClick={ this.onClickSearch }
          >
            Pesquisar
          </button>
        </form>
        {
          loading
              && <Loading />
        }
        <span id="searchResults">
          { albuns.length === 0
            // Caso albuns não receba nenhum valor mostra uma frase informado
            ? (<p>Nenhum álbum foi encontrado</p>)
            : (
              // Caso receba exbibe na tela as informações referentes ao álbum
              <section>
                <h3 id="resultado">
                  {`Resultado de álbuns de ${artistNameDisplay}:`}
                </h3>
                {/* Faz um map enviando os elementos do album para o AlbumCard
                            E cria um link envolvendo os elementos exibidos na tela */}
                <AlbumCardS>
                  {albuns.map((album, index) => (
                    <div id="albumCard" key={ index }>
                      <Link
                        to={ `/album/${album.collectionId}` }
                        data-testid={ `link-to-album-${album.collectionId}` }
                      >
                        <div>
                          {/* Chama o componente AlbumCard e passa as props */}
                          <img src={ album.artworkUrl100 } alt={ album.collectionName } />
                          <h4 id="albumName">{ album.collectionName }</h4>
                          <p id="artistName">{ album.artistName }</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </AlbumCardS>
              </section>)}
        </span>
      </DivGlobal>
    );
  }
}

Search.propTypes = {
  history: PropTypes.shape.isRequired,
};

export default Search;
