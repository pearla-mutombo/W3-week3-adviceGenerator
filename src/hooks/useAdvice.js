import { useCallback, useEffect, useRef, useState } from "react";
import { getAdvice } from "../services/adviceApi";

const COOLDOWN_MS = 1000;

export function useAdvice() {
  const [advice, setAdvice] = useState({
    id: null,
    text: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cooldown, setCooldown] = useState(false);

  const controllerRef = useRef(null);
  const cooldownTimeoutRef = useRef(null);
  const loadingRef = useRef(false);
  const cooldownRef = useRef(false);

  const requestAdvice = useCallback(async () => {
    if (loadingRef.current || cooldownRef.current) {
      return;
    }

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    loadingRef.current = true;
    setLoading(true);
    setError("");

    try {
      const newAdvice = await getAdvice(controller.signal);
      setAdvice(newAdvice);

      cooldownRef.current = true;
      setCooldown(true);

      cooldownTimeoutRef.current = setTimeout(() => {
        cooldownRef.current = false;
        setCooldown(false);
        cooldownTimeoutRef.current = null;
      }, COOLDOWN_MS);
    } catch (error) {
      if (error.name !== "CanceledError" && error.name !== "AbortError") {
        setError("Sorry, we could not get new advice. Please try again.");
      }
    } finally {
      if (controllerRef.current === controller) {
        loadingRef.current = false;
        setLoading(false);
      }
    }
  }, []);

  const fetchAdvice = useCallback(() => {
    requestAdvice();
  }, [requestAdvice]);

  useEffect(() => {
    const initialRequest = setTimeout(() => {
      requestAdvice();
    }, 0);

    return () => {
      clearTimeout(initialRequest);

      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      if (cooldownTimeoutRef.current) {
        clearTimeout(cooldownTimeoutRef.current);
      }
    };
  }, [requestAdvice]);
  return {
    advice,
    loading,
    error,
    cooldown,
    fetchAdvice,
  };
}
