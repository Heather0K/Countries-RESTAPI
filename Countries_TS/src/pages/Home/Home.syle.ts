import styled from 'styled-components';

interface itemProps {
  readonly selected: string;
  readonly title: string;
}

export const RegionItem = styled.button<itemProps> `
  color: #06A77D;
  background-color: #FFFFFF;
  border-radius: 12px;
  border: ${props => props.selected === props.id ?' 3px solid #06A77D' : '1px solid #dee2e6'} ;
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
  `;






