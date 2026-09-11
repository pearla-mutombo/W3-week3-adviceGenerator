import { useEffect, useState } from "react";

function CopyAdviceButton({ advice, disabled }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      setCopied(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    if (disabled || !advice) {
      return;
    }

    try {
      await navigator.clipboard.writeText(advice);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      className={`copy-advice-button ${copied ? "copied" : ""}`}
      onClick={handleCopy}
      disabled={disabled || !advice}
      aria-label="Copy advice">
      {copied ? "Copied!" : "Copy Advice"}{" "}
    </button>
  );
}

export default CopyAdviceButton;
