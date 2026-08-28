import { useEffect, useState } from "react";
import AdviceCard from "./components/AdviceCard/AdviceCard";
import AdviceButton from "./components/AdviceButton/AdviceButton";
import "./styles/main.scss";

function App() {
  const [advice, setAdvice] = useState({
    id: null,
    text: " ",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    handleNewAdvice();
  }, []);

  async function handleNewAdvice() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.adviceslip.com/advice");

      if (!response.ok) {
        throw new Error("Failed to fetch advice.");
      }

      const data = await response.json();

      setAdvice({
        id: data.slip.id,
        text: data.slip.advice,
      });
    } catch (error) {
      setError("Sorry, we could not get new advice. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="app">
      <section className="advice-card">
        <AdviceCard advice={advice} />
        <AdviceButton
          onClick={handleNewAdvice}
          disabled={loading}
          loading={loading}
        />
      </section>
    </main>
  );
}

export default App;
