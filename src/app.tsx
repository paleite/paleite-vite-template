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
    <main className="mx-auto my-3 max-w-screen-sm rounded-xl bg-slate-300 p-4 py-3">
      <section className="mb-8">
        <h1 className="mb-2 font-semibold">
          Hello, World! Clicked {count} times
        </h1>
        <FancyButton
          onClick={() => {
            handleClick();
          }}
          disabled={isLoading}
          loading={isLoading}
        >
          Fancy Button
        </FancyButton>
      </section>
      <section>
        <h2 className="mb-2 font-semibold">Timestamps</h2>
        <ul ref={parent}>
          {timestamps.length === 0 ? (
            <li className="font-black">No timestamps yet!</li>
          ) : (
            timestamps.map((timestamp, index) => (
              <li key={index}>{timestamp.toString()}</li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
};

export default App;
