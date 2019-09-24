import styled from 'styled-components';

export const Title = styled.h1`
  color: #fff;
  font-size: 30px;
  font-weight: 550;
  font-family: 'Poppins', sans-serif;

`;

export const SubTitle = styled.h4`
  color: #fff;
  margin-top: -10px;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;

  
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Faixa = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: #FAD320;
  padding: 50px 0px 30px 0px;
`;

export const Container = styled.div`
  display: block;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: #fff;
  padding: 100px 0px 80px 0px;
`;

export const Body = styled.div`
  display: grid;
  justify-content: center;
  flex-direction: column;
  grid-template-columns: repeat(3, 400px);
  grid-gap: 20px;
  text-align: left;
  @media (max-width: 600px) {
    grid-template-columns: 330px !important;
    grid-gap: 20px;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 335px 335px;
    grid-gap: 20px;
  }
  @media (min-width: 1900px) {
    grid-template-columns: repeat(4, 400px);
    grid-gap: 20px;
  }
`;
export const Img = styled.div`
  height: 230px;
  background-image: url(${props => props.imagem});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Text = styled.div`
  background: #fff;
  height: 130px;
  color: #2c3e50;
  margin-left: -10px;
  h3 {
    margin: 10px 0px 0px 10px;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 17px;
    font-family: 'Poppins', sans-serif;
  }
  h4 {
    margin: 0px 0px 10px 10px;
    text-transform: capitalize;
    color: #a6a6a6;
    font-weight: 400;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
  }
  h5 {
    margin: 0px 0px 0px 10px;
    text-transform: capitalize;
    color: #383838;
    font-weight: 450;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
  }
  strong {
    margin: 0px 10px;
    color: #ffdf29;
    font-size: 22px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
  }
`;