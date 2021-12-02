import styled from "styled-components";

export const InfoCard = styled.div `
  background-color: #FFFFFF;
  border-radius: 12px;
  border: 1px solid #dee2e6;
  padding: 12px;
  margin: 12px;
  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
`;

export const CardTitle = styled.div `
  display: flex;
  flex-wrap: wrap-reverse;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  `;

export const Flag = styled.p `
 font-size: 90px;
  margin: 0;
  `;

export const Names = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  
  h6, p {
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    h6, p {
     padding: 0;
      margin: 15px;
    }
  }

`;
