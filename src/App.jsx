import { useState } from "react";
import AdviceCard from "./components/AdviceCard/AdviceCard";
import AdviceButton from "./components/AdviceButton/AdviceButton";
import "./styles/main.scss";

function App() {
  const [advice, setAdvice] = useState({
    id: 117,
    text: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });

  function handleNewAdvice() {
    setAdvice({
      id: 118,
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    });
  }

  return (
    <main className="app">
      <section className="advice-card">
        <AdviceCard advice={advice} />
        <AdviceButton onClick={handleNewAdvice} />
      </section>
    </main>
  );
}

export default App;