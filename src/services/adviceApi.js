import axios from "axios";

const API_URL = import.meta.env.VITE_ADVICE_API_URL;

export async function getAdvice(signal) {
  const response = await axios.get(`${API_URL}/advice`, {
    signal,
  });

  return {
    id: response.data.slip.id,
    text: response.data.slip.advice,
  };
}
