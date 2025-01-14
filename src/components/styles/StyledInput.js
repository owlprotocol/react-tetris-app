import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 0 0 20px 0;
  padding: 20px 10px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: #999;
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.5rem;
`;

export const StyledInput = styled.input`
  outline: none;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: ridge;
  margin-top: 5px;
  flex-direction: column;
  align-items: left;
  height: fit-content;
  max-height: 488px;
  overflow-y: hidden
  width: 100%;
  color: #999;
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.5rem;
`;
