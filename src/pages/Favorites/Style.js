import styled from 'styled-components';

export const DivGlobal = styled.div`
  display: flex;
  height: auto;
  min-height: 100vh;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  background-color: #FAFAFA;
  #headerLoading {
    margin-top: 153px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 65px;
    letter-spacing: 0.02em;
    color: #023031;
  }
  #bodyLoading {
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
    #headerLoading {
      margin-top: 93px;
      font-family: 'Epilogue';
      font-style: normal;
      font-weight: 300;
      font-size: 30px;
      line-height: 35px;
      letter-spacing: 0.02em;
      color: #023031;
    }
    #bodyLoading {
      margin-top: 374px;
      font-family: 'Epilogue';
      font-style: normal;
      font-weight: 300;
      font-size: 42px;
      line-height: 35px;
      letter-spacing: 0.02em;
      color: #023031;
    }
  }
`;

export const SectionS = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  #pageTitle {
    display: flex;
    align-self: flex-start;
    margin-top: 113px;
    margin-bottom: 44px;
    font-size: 20px;
  }
  #musicCard {
    margin-left: 79px;
    margin-right: 79px;
    width: 728px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-items: center;
    justify-content: center;
    border-bottom: 1px solid #E1E5EB;
    #musics {
      border-top: 1px solid #E1E5EB;
    }
  }

  @media (max-width: 700px) {
    #pageTitle {
      margin-top: 53px;
      margin-bottom: 24px;
    }
    #musicCard {
      margin-top: 18px;
      margin-left: 20px;
      margin-right: 20px;
      width: 530px;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #E1E5EB;
      #musics {
        border-top: 1px solid #E1E5EB;
      }
    }
  }
`;
