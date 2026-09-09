import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { getAdvice } from "./services/adviceApi";

vi.mock("./services/adviceApi", () => ({
  getAdvice: vi.fn(),
}));

describe("Advice Generator App", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows loading state while fetching advice", async () => {
    getAdvice.mockImplementation(
      () => new Promise(() => {}),
    );

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });

  it("displays successfully fetched advice", async () => {
    getAdvice.mockResolvedValue({
      id: 42,
      text: "Keep going. You are doing great.",
    });

    render(<App />);

    expect(
      await screen.findByText("ADVICE #42"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("“Keep going. You are doing great.”"),
    ).toBeInTheDocument();
  });

  it("shows an error message when the API request fails", async () => {
    getAdvice.mockRejectedValue(new Error("API request failed"));

    render(<App />);

    expect(
      await screen.findByText(
        "Sorry, we could not get new advice. Please try again.",
      ),
    ).toBeInTheDocument();
  });
});