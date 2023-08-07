// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Button,
  ButtonEqual,
  CalculateBtn,
  FlexContainer,
  Input,
  InputDiv,
  MainContainer,
} from "./styles/container.styles";

export default function Calculator() {
  const [total, setTotal] = useState("");

  const handleClick = (e) => {
    setTotal(total.concat(e.target.id));
  };

  const calculate = () => {
    setTotal(eval(total).toString());
  };

  const handleAc = () => {
    setTotal("");
  };

  const handleDel = () => {
    setTotal(total.slice(0, -1));
  };

  return (
    <MainContainer>
      <InputDiv>
        <Input
          type="text"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
      </InputDiv>
      <FlexContainer>
        <Button id="AC" onClick={handleAc}>
          AC
        </Button>
        <Button id="Del" onClick={handleDel}>
          DEL
        </Button>
        <CalculateBtn id="+" onClick={handleClick}>
          +
        </CalculateBtn>
        <Button id="1" onClick={handleClick}>
          1
        </Button>
        <Button id="2" onClick={handleClick}>
          2
        </Button>{" "}
        <CalculateBtn id="-" onClick={handleClick}>
          -
        </CalculateBtn>
        <Button id="3" onClick={handleClick}>
          3
        </Button>
        <Button id="4" onClick={handleClick}>
          4
        </Button>
        <CalculateBtn id="*" onClick={handleClick}>
          *
        </CalculateBtn>
        <Button id="5" onClick={handleClick}>
          5
        </Button>
        <Button id="6" onClick={handleClick}>
          6
        </Button>
        <CalculateBtn id="/" onClick={handleClick}>
          /
        </CalculateBtn>
        <Button id="7" onClick={handleClick}>
          7
        </Button>
        <Button id="8" onClick={handleClick}>
          8
        </Button>{" "}
        <ButtonEqual id="=" onClick={calculate}>
          =
        </ButtonEqual>
        <Button id="9" onClick={handleClick}>
          9
        </Button>
        <Button id="0" onClick={handleClick}>
          0
        </Button>
        <Button id="." onClick={handleClick}>
          .
        </Button>
      </FlexContainer>
    </MainContainer>
  );
}
