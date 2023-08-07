import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #979797;
  margin: 20px;
  padding: 20px;
`;

export const InputDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: transparent;
  margin: 5px;
  border: none;
  font-size: 2em;
  background-color: white;
`;

export const ButtonEqual = styled.button`
  background-color: transparent;
  margin: 5px;
  border: none;
  font-size: 2em;
  background-color: #e46c4b;
  color: white;
`;

export const Input = styled.input`
  font-size: 2rem;
  width: 100rm;
  background-color: white;
  border: none;
  text-align: right;
`;

export const CalculateBtn = styled.button`
  background-color: transparent;
  margin: 5px;
  border: none;
  font-size: 2em;
  color: white;
  background-color: #3c6d97;
`;

export const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  text-align: center;
`;
