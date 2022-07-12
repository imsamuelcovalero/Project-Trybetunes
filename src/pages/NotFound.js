import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';

const DivGlobal = styled.div`
  display: flex;
  height: auto;
  min-height: 100vh;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  background-color: #FAFAFA;

  @media (max-width: 700px) {

  }
`;

const DivS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #logo {
    margin-top: 79px;
    width: 208px;
    height: 158px;
  }
  #texts {
    margin-top: 116px;
    display: flex;
    width: 1000px;
    justify-content: space-between;
    font-family: 'Epilogue';
    font-style: normal;
    #ops {
      font-weight: 400;
      font-size: 200px;
      line-height: 205px;
      letter-spacing: 0.02em;
      color: #023031;
    }
    #pageNF {
      margin-left: 60px;
      font-weight: 300;
      font-size: 60px;
      line-height: 65px;
      letter-spacing: 0.02em;
      color: #023031;
      text-align: justify;
      text-justify: inter-word;
    }
  }

  @media (max-width: 700px) {
    margin-top: 49px;
    #texts {
      margin-top: 116px;
      display: flex;
      width: 650px;
      justify-content: space-between;
      #ops {
        font-weight: 400;
        font-size: 100px;
        line-height: 205px;
        letter-spacing: 0.02em;
        color: #023031;
      }
      #pageNF {
        margin-left: 35px;
        font-weight: 300;
        font-size: 45px;
        line-height: 65px;
        letter-spacing: 0.02em;
        color: #023031;
        text-align: justify;
      }
    }
  }
`;

class NotFound extends Component {
  render() {
    return (
      <DivGlobal data-testid="page-not-found">
        <DivS>
          <img id="logo" src={ logo } alt="logo da TrybeTunes" />
          <div id="texts">
            <h1 id="ops">Ops!</h1>
            <h3 id="pageNF">A página que você está procurando não foi encontrada.</h3>
          </div>
        </DivS>
      </DivGlobal>
    );
  }
}

export default NotFound;
