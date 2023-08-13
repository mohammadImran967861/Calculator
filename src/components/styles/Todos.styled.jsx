import styled from "styled-components";

export const Main = styled.div`
  background-color: #2182d7;
  padding: 20%;
  width: 20rem;
  margin: 0 auto;
  border-radius: 20px;
`;

export const Input = styled.input`
  display: inline;
  margin-top: 20px;
  width: 75%;
  border: none;
  box-shadow: 1px 1px 10px 2px black;
  :focus {
    outline: none;
  }
`;

export const Hthree = styled.h3`
  box-shadow: 1px 1px 10px 2px black;
  padding: 5px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  color: white;
`;

export const Button = styled.button`
  background-color: #ff0000;
  border-radius: 20px;
  color: white;
  border: none;
`;

export const AddButton = styled.button`
  border: none;
  box-shadow: 1px 1px 10px 2px black;
`;

export const Ul = styled.ul`
  text-align: left;
`;

export const StyledH1 = styled.h1`
  background-color: red;
  color: white;
  padding: 10px;
  box-shadow: 1px 1px 5px 5px;
`;

export const Ac = styled.button`
  margin: 20px 0 0 130px;
`;
