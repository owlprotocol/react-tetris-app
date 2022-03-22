import styled from 'styled-components';

export const StyledLeaderboardWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 0 0 20px 0;
  padding: 15px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: #999;
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.5rem;
`;

export const StyledLeaderboardRow = styled.div`
  margin: 10px 0 0 0;
  key: ${(props) => props.id};
`;
