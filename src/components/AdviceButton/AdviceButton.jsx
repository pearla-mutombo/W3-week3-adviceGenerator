function AdviceButton({ onClick }) {
  return (
    <button
      type="button"
      className="advice-button"
      onClick={onClick}
      aria-label="Get new advice"
    >
      <span className="advice-button__icon" aria-hidden="true">
        ⚄
      </span>
    </button>
  );
}

export default AdviceButton;