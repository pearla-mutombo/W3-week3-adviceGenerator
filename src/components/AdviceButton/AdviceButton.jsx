function AdviceButton({ onClick, disabled, loading }) {
  return (
    <button
      type="button"
      className="advice-button"
      onClick={onClick}
      disabled={disabled}
      aria-label="Get new advice">
      {loading ? (
        <span>Loading...</span>
      ) : (
        <span className="advice-button__icon" aria-hidden="true">
          ⚄
        </span>
      )}
    </button>
  );
}

export default AdviceButton;
