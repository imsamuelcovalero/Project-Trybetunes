import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      isSaveButtonDisabled: true,
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

      console.log('artistName.length', artistName.length);
      if (artistName.length >= MINLETTERS) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  }

  render() {
    const { artistName, isSaveButtonDisabled } = this.state;
    return (
      <div data-testid="page-search">
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
            // onClick={ this.onClickEnter }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
