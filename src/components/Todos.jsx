// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Ac,
  AddButton,
  Button,
  Hthree,
  Input,
  Main,
  StyledH1,
} from "./styles/Todos.styled";

export default function Todos() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  function handleTodos(e) {
    setInputData(e.target.value);
  }

  function addTodos() {
    if (!inputData) {
      setError(true);
    } else {
      setItems([...items, inputData]);
      setInputData("");
      setError(false);
    }
  }

  function deleteItem(id) {
    console.log(id);
    const updatedItems = items.filter((index, eleme) => {
      return eleme !== id;
    });
    return setItems(updatedItems);
  }

  function allClearFunc() {
    setItems([]);
    setError(false);
  }

  return (
    <Main>
      <Input type="text" value={inputData} onChange={handleTodos} />
      <AddButton onClick={addTodos}>Add Todos</AddButton>
      <>
        {error ? (
          <div>
            <StyledH1>Error...</StyledH1>{" "}
            {items.map((element, index) => (
              <Hthree key={index}>
                {element} - <br />
                <Button onClick={() => deleteItem(index)}>Delete</Button>
              </Hthree>
            ))}
          </div>
        ) : (
          <>
            {items.map((element, index) => (
              <Hthree key={index}>
                {element} - <br />
                <Button onClick={() => deleteItem(index)}>Delete</Button>
              </Hthree>
            ))}
          </>
        )}
        <Ac onClick={allClearFunc}>All Clear</Ac>
      </>
    </Main>
  );
}
