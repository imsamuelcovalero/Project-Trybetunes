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

export const SectionS = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  #album {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 290px;
    height: 418px;
    border-radius: 6px;
    margin-left: 79px;
    margin-top: 80px;
    text-align: center;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12), 
                0px 1px 3px rgba(0, 0, 0, 0.2);
    #albumImage {
      height: 290px;
    }
    #albumName {
      margin-top: 45px;
    }
    #artistName {
      margin-top: 11px;
    }
  }
  #musicCard {
    margin-left: 79px;
    margin-right: 79px;
    margin-top: 58px;
    width: 728px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #E1E5EB;
    #musics {
      border-top: 1px solid #E1E5EB;
    }
  }

  @media (max-width: 700px) {
    #album {
      display: flex;
      flex-direction: column;
      align-self: flex-start;
      width: 230px;
      height: 318px;
      border-radius: 6px;
      margin-top: 40px;
      margin-left: 10px;
      text-align: center;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12), 
                  0px 1px 3px rgba(0, 0, 0, 0.2);
      #albumImage {
        height: 230px;
      }
      #albumName {
        margin-top: 22px;
      }
      #artistName {
        margin-top: 11px;
      }
    }
    #musicCard {
      margin-top: 18px;
      margin-left: 0;
      margin-right: 0;
      width: 430px;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #E1E5EB;
      #musics {
        border-top: 1px solid #E1E5EB;
      }
    }
  }
`;
