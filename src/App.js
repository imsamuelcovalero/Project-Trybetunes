import React from 'react';
// import Sidebar from './components/Sidebar';
import Content from './components/Content';

class App extends React.Component {
  constructor() {
    super();
    // this.onClickEnter = this.onClickEnter.bind(this);
    this.state = {
      userName: '',
      isSaveButtonDisabled: true,
      loading: false,
    };
  }

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

      console.log('userName.length', userName.length);
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

  checkLoading = (boolean) => {
    this.setState({
      loading: boolean,
    });
  }

  render() {
    const { userName, isSaveButtonDisabled, loading } = this.state;
    return (
      <section>
        {/* <Sidebar /> */}
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
