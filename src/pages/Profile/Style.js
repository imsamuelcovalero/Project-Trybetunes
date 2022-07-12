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

export const DivS = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 104px;
  width: 288px;

  #image {
    width: 100px;
    height: 100px;
  }

  #imageEditBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #itensPerfil {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 25px;
    font-size: 18px;
    #description {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: 700;
    }
    #title {
      font-size: 20px;
      font-weight: 700;
    }
  }

  @media (max-width: 700px) {
    margin-top: 53px;
  }
`;

export const ButtonEditProfile = styled.button`
  cursor: pointer;
  width: 118px;
  height: 32px;
  font-weight: 400;
  font-size: 18px;
  border-radius: 6px;
  color: #003BE5;
  border-color: #003BE5;
  background-color: transparent;
`;
