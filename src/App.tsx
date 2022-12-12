import { startTransition, Suspense, useState, useTransition } from "react";
import { A, B } from "./Pages";
import "./styles.css";

export default function App() {
  const [tab, setTab] = useState("a");
  const [, transition] = useTransition();
  const switchTab = () => {
    transition(() => {
      setTab((tab) => (tab === "a" ? "b" : "a"));
    });
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={switchTab}>toggle</button>
      <Suspense fallback={<div>loading...</div>}>
        {tab === "a" ? <A /> : <B />}
      </Suspense>
    </div>
  );
}
