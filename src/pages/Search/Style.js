import styled from 'styled-components';

export const DivGlobal = styled.div`
  display: flex;
  height: auto;
  min-height: 100vh;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  background-color: #FAFAFA;
  form {
    margin-top: 70px;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    #artistSearch {
      background-color: #FFFFFF;
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 12px 16px;
      border: 1px solid #3D495C;
      border-radius: 6px;
      width: 419px;
      height: 45px;
      margin-bottom: 3px;
    }
    #searchIcon {
      font-size: 25px;
      align-self: center;
      // border: 1px solid red;
    }
    input {
      background: transparent;
      display: flex;
      justify-content: flex-start;
      border-radius: 6px;
      font-family: 'Verdana';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      width: 429px;
      height: 43px;
      border: none;
      &:focus {
        outline: none;
        background-color: #FFFFFF;
      }
    }
    button {
      cursor: pointer;
      font-family: Verdana;
      font-size: 16px;
      font-weight: 500;
      color: white;
      width: 104px;
      height: 45px;
      margin-left: 20px;
      background-color: #003BE5;
    }
  }
  #searchResults {
    display: flex;
    width: 90%;
    font-family: Epilogue;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 25px;
  }
  #resultado {
    margin-top: 10px;
    margin-bottom: 25px;
  }
`;

export const AlbumCardS = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    padding: 0px, 0px, 16px, 0px;
    gap: 16px;
    #albumCard {
      width: 250px;
      min-height: 290px;
      border-radius: 6px;
      // justify-content: center;
      // align-items: center;
      // text-align: center;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12), 
                  0px 1px 3px rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      a {
        color: #3D495C;
        text-decoration: none;
      }
      overflow: hidden;
      :hover {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.4);
      }
    }
    img {
      width: 260px;
      height: 170px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.4);
      border-radius: 6px 6px 0px 0px;
    }
    #albumName {
      padding-left: 16px;
      font-family: Verdana;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 5px;
    }
    #artistName {
      padding-left: 16px;
      font-family: Verdana;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
    }
`;
