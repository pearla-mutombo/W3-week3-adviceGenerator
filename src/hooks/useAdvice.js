import { useCallback, useEffect, useRef, useState } from "react";
import { getAdvice } from "../services/adviceApi";

export function useAdvice() {
  const [advice, setAdvice] = useState({
    id: null,
    text: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const controllerRef = useRef(null);

  const fetchAdvice = useCallback(async () => {
    // Cancel the previous request if one is still running.
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);
    setError("");

    try {
      const newAdvice = await getAdvice(controller.signal);
      setAdvice(newAdvice);
    } catch (error) {
      // Ignore errors caused by intentionally cancelling a request.
      if (error.name !== "CanceledError" && error.name !== "AbortError") {
        setError("Sorry, we could not get new advice. Please try again.");
      }
    } finally {
      // Only update loading if this is still the current request.
      if (controllerRef.current === controller) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchAdvice();

    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, [fetchAdvice]);

  return {
    advice,
    loading,
    error,
    fetchAdvice,
  };
}
