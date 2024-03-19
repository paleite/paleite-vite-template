import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import { FancyButton } from "./components";

const App = () => {
  const [timestamps, setTimestamps] = useState<number[]>([]);
  const [parent] = useAutoAnimate();

  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setCount((count) => count + 1);
    const nextDate = Date.now();

    setTimeout(() => {
      setIsLoading(false);
      setTimestamps((timestamps) => [...timestamps, nextDate]);
    }, 1000);
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
      <section>
        <h2>Timestamps</h2>
        <ul ref={parent}>
        {timestamps.length === 0 ? <li className="font-black">No timestamps yet!</li> : timestamps.map((timestamp, index) => (
            <li key={index}>{timestamp.toString()}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default App;
