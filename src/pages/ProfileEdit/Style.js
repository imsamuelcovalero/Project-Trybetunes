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
  gap: 25px;
  font-size: 18px;

  #image {
    width: 100px;
    height: 100px;
  }

  #title {
    font-size: 20px;
    font-weight: 700;
  }
  #description {
    display: flex;
    flex-direction: column;
    margin-bottom: 4px;
    font-size: 20px;
    font-weight: 700;
  }
  #subtitle {
    font-style: italic;
    margin-bottom: 8px;
    font-size: 16px;
  }

  input {
    width: 288px;
    height: 37px;
    border-top: none;
    border-left: none;
    border-right: none;
    background: transparent;
    border-bottom: 1px solid #3D495C;
    font-size: 18px;
    padding-left: 8px;
    &:focus {
      outline: none;
      ::placeholder {
        color: transparent;
      }
    }
  }

  #editDescriptionInput {
    width: 288px;
    height: 100px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #3D495C;
    background: transparent;
    padding-top: 8px;
    font-family: 'Verdana';
    font-size: 18px;
    &:focus {
      outline: none;
      ::placeholder {
        color: transparent;
      }
    }
  }

  #editPicture {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 30px;
    #editPictureInput {
      width: 192px;
      height: 37px;
      font-size: 16px;
      border-radius: 2px;
      border: 1px solid #DADADA;
    }
  }

  #saveButton {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    background: #003BE5;
    color: #FFFFFF;
    font-size: 16px;
    border-radius: 2px;
    margin-top: 11px;
    width: 115px;
    height: 40px;
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
