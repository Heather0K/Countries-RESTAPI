import styled from "styled-components";

export const InfoCard = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  border: 1px solid #dee2e6;
  padding: 12px;
  margin: 12px;
  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
`;

export const CardTitle = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Emoji = styled.p`
  font-size: 50px;
  margin: 5px;
`;

export const Flag = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;

  img {
    max-width: 200px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

   p, b {
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    p, b {
     padding: 0;
      margin: 15px;
    }
  }

`;
