import styled from 'styled-components';

export const HeaderS = styled.header`
  top: 0;
  width: 100%;
  height: 174px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  align-content: space-between;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    margin-left: 35px;
    margin-top: -14px;
  }
  #topHeader {
    background: #023031;
    height: 96px;
    box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  }
  #userIconName {
    background: #F0F2F5;
    border-radius: 50px;
    align-items: center;
    padding-left: 2px;
    width: 198.7px;
    height: 41.65px;
    display: flex;
    justify-content: space-between;
    margin-right: 49.3px;
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
  }
  #userName {
    font-size: 22px;
    width: 100%;
    justify-content: center;
    margin-right: 15px;
    margin-left: 3px;
  }
  #icon {
    font-size: 38px;
    color: #2FC18C;
  }
  @media (max-width: 700px) {
    max-width: 700px;
  }
`;

export const ButtonSearch = styled.button`
  background: ${({ navSelected }) => (navSelected === 'search'
    ? '#036B52' : 'transparent')};
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  color: ${({ navSelected }) => (navSelected === 'search'
    ? 'white' : '#2FC18C')};
  display: flex;
  width: 33.33%;
  height: 78px;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const ButtonFavorites = styled.button`
  background: ${({ navSelected }) => (navSelected === 'favorites'
    ? '#036B52' : 'transparent')};
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  color: ${({ navSelected }) => (navSelected === 'favorites'
    ? 'white' : '#2FC18C')};
  display: flex;
  width: 33.33%;
  height: 78px;
  align-items: center;
  justify-content: center;
  border-top: none;
  border-bottom: none;
  border-left: 2px solid white;
  border-right: 2px solid white;
`;

export const ButtonProfile = styled.button`
  background: ${({ navSelected }) => (navSelected === 'profile'
    ? '#036B52' : 'transparent')};
  cursor: pointer;
  font-size: 25px;
  font-weight: bold;
  color: ${({ navSelected }) => (navSelected === 'profile'
    ? 'white' : '#2FC18C')};
  display: flex;
  width: 33.33%;
  height: 78px;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const NavLinks = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 78px;
  background: #F0F2F5;
`;
