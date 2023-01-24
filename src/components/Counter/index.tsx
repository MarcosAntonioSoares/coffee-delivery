import { Minus, Plus } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { Button, CounterContainer } from "./styles";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrementCounter() {
    setCounter(counter + 1);
  }

  function handleDecrementCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function handleClick(e: ChangeEvent<HTMLInputElement>) {
    setCounter(e.target.valueAsNumber)
  }

  return (
    <CounterContainer size="sm">
      <Button onClick={handleDecrementCounter}>
        <Minus weight="fill" />
      </Button>
      <input type="number" value={counter} onChange={handleClick} />
      <Button onClick={handleIncrementCounter}>
        <Plus weight="fill" />
      </Button>
    </CounterContainer>
  )
}