import { useState } from "react";
import { FancyButton } from "./components";

const App = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCount((count) => count + 1);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <main>
      <h1>Hello, World! Clicked {count} times</h1>
      <FancyButton
        onClick={() => {
          handleClick();
        }}
        disabled={isLoading}
        loading={isLoading}
      >
        Fancy Button
      </FancyButton>
    </main>
  );
};

export default App;
