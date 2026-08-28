import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import * as adviceApi from "./services/adviceApi";

vi.mock("./services/adviceApi");

describe("App", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("loads and displays advice from the API", async () => {
    adviceApi.getAdvice.mockResolvedValue({
      id: 42,
      text: "Always keep learning.",
    });

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/ADVICE #\s*42/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Always keep learning/)).toBeInTheDocument();

    expect(adviceApi.getAdvice).toHaveBeenCalledTimes(1);
  });

  it("shows an error when the API request fails", async () => {
    adviceApi.getAdvice.mockRejectedValue(new Error("API failed"));

    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByText(
          "Sorry, we could not get new advice. Please try again.",
        ),
      ).toBeInTheDocument();
    });
  });
});
