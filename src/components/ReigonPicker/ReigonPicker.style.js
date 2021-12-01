import styled from 'styled-components';

export const ReigonContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  flex-wrap: wrap;
`;

export const ReigonItem = styled.button `
  color: #42542e;
  background-color: #FFFFFF;
  border-radius: 12px;
  border: 1px solid #dee2e6;
  font-size: 58px;
  padding: 12px;
  margin: 12px;
  width: 200px;
  text-align: center;
  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);

  p {
    font-size: 25px;
  }

  :hover {
    background-color: rgba(239, 239, 239, 0.2);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }

  ${({selected}) => selected && `
    border: 3px solid #000000;
  `}
  `;
export const CountryContainer = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;

`;
export const CountryItem = styled.button `
  color: #303030;
  background-color: #FFFFFF;
  border-radius: 12px;
  border: 1px solid #dee2e6;
  padding: 5px;;
  margin: 12px;
  width: 300px;
  text-align: center;
  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);

  div{
    font-size: 60px
  }
  p {
    font-size: 20px;
  }

  :hover {
    background-color: rgba(239, 239, 239, 0.2);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }

  ${({selected}) => selected && `
    border: 3px solid #000000;
  `}
  `;