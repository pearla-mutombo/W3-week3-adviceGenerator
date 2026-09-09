import AdviceCard from "./components/AdviceCard/AdviceCard";
import AdviceButton from "./components/AdviceButton/AdviceButton";
import CopyAdviceButton from "./components/CopyAdviceButton/CopyAdviceButton";
import { useAdvice } from "./hooks/useAdvice";
import "./styles/main.scss";

function App() {
  const { advice, loading, error, cooldown, fetchAdvice } = useAdvice();

  return (
    <main className="app">
      {" "}
      <section className="advice-card">
        {" "}
        <AdviceCard advice={advice} />
        {error && <p>{error}</p>}
        <AdviceButton
          onClick={fetchAdvice}
          disabled={loading || cooldown}
          loading={loading}
        />
        <CopyAdviceButton advice={advice.text} disabled={loading || cooldown} />
      </section>
    </main>
  );
}

export default App;
