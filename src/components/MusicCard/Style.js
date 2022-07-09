import styled from 'styled-components';

export const SectionS = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0 50px;
  padding: 22px 0;
  #musicName {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 80px;
    font-size: 16px;
  }
`;

export const CheckboxHeart = styled.div`
  cursor: pointer;
  margin-left: 20px;
`;
