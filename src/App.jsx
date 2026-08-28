import AdviceCard from "./components/AdviceCard/AdviceCard";
import AdviceButton from "./components/AdviceButton/AdviceButton";
import { useAdvice } from "./hooks/useAdvice";
import "./styles/main.scss";

function App() {
  const { advice, loading, error, fetchAdvice } = useAdvice();

  return (
    <main className="app">
      <section className="advice-card">
        <AdviceCard advice={advice} />

        {error && <p>{error}</p>}

        <AdviceButton
          onClick={fetchAdvice}
          disabled={loading}
          loading={loading}
        />
      </section>
    </main>
  );
}

export default App;
