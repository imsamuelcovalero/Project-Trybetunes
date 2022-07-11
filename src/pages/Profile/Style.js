import styled from 'styled-components';

export const DivGlobal = styled.div`
  display: flex;
  height: auto;
  min-height: 100vh;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  background-color: #FAFAFA;
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
