import styled from 'styled-components';

export const DivGlobal = styled.div`
  display: flex;
  height: auto;
  min-height: 100vh;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  background-color: #FAFAFA;
  #loading {
    margin-top: 329px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    line-height: 65px;
    letter-spacing: 0.02em;
    color: #023031;
  }

  @media (max-width: 700px) {
    #loading {
      margin-top: 374px;
      font-size: 42px;
      line-height: 35px;
    }
  }
`;

export const DivS = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  img {
    margin-bottom: 104px;
    margin-top: 109px;
  }
  form {
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    height: 314px;
    padding: 94px;
    width: 697px;
  }
  input {
    border: 1px solid #e1e5eb;
    outline: none;
    padding: 12px 16px;
    width: 100%;
  }
  button {
    background-color: var(--accent);
    border: none;
    border-radius: 2px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    color: var(--white);
    cursor: pointer;
    margin-top: 31px;
    padding: 8px 32px;
    width: 100%;
  }

  @media (max-width: 700px) {
    margin-top: 50px;
    form {
      max-width: 90%;
      padding-left: 24px;
      padding-right: 24px;
    }

    img {
      margin: 0;
      margin-bottom: 50px;
    }
  }
`;
