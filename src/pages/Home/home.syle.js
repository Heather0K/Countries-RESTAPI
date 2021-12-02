import styled from 'styled-components';

export const RegionItem = styled.button `
  color: #06A77D;
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
    color: #323232;
  }

  :hover {
    background-color: rgba(239, 239, 239, 0.2);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }

  ${({selected}) => selected && `
    border: 3px solid #06A77D;
  `}
  `;






