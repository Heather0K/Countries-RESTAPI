import styled from 'styled-components';

export const CountryItem = styled.button `
  background-color: #FFFFFF;
  border-radius: 12px;
  border: 1px solid #dee2e6;
  padding: 5px;
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
  `;