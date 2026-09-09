function AdviceCard({ advice }) {
  return (
    <div className="advice-card__content">
      <p className="advice-card__number">
        ADVICE #{advice.id}
      </p>

      <blockquote className="advice-card__text">
        “{advice.text}”
      </blockquote>

      <div className="advice-card__divider" aria-hidden="true">
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default AdviceCard;