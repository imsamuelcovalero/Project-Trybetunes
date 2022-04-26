// Importa React e o componente Content
import React from 'react';
import Content from './components/Content';

class App extends React.Component {
  constructor() {
    super();
    // Seta os estados iniciais
    this.state = {
      userName: '',
      isSaveButtonDisabled: true,
      loading: false,
    };
  }

  // Cria uma função para trabalhar o InputChange passado como props para Content e desta para Login
  onInputChange = ({ target }) => {
    // muda o state atualizando os valores dos campos alterados
    this.setState({
      [target.name]: target.value,
      // callback para executar a verificação após a atualização assíncrona do state com as informações digitadas
    }, () => {
      // desestrutura o state
      const { userName } = this.state;

      // atribui valores a constantes para a realização das verificações
      const MINLETTERS = 3;

      // Caso o valor do input seja maior ou igual a 3 abilita o botão, caso contrário permanece sesabilitado
      if (userName.length >= MINLETTERS) {
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

  // Função criada para receber um booleano do filho como parâmetro e mudar a condição do estado loading
  checkLoading = (boolean) => {
    this.setState({
      loading: boolean,
    });
  }

  render() {
    // Desestrutura o estado
    const { userName, isSaveButtonDisabled, loading } = this.state;
    return (
      <section>
        {/* Passa para o componente contente as props que serão usadas posteriosmente em Login */}
        <Content
          userName={ userName }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          loading={ loading }
          onInputChange={ this.onInputChange }
          checkLoading={ this.checkLoading }
        />
      </section>
    );
  }
}

export default App;
