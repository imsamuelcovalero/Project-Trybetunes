// Importa React
import React, { Component } from 'react';

// Cria uma classe para exibir "Carregando..." na tela
class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <span>Carregando...</span>
      </div>
    );
  }
}

export default Loading;
