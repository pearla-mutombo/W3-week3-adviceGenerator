import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CopyAdviceButton from "./CopyAdviceButton";

describe("CopyAdviceButton", () => {
  it("copies advice and shows Copied after clicking", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);

    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText,
      },
      configurable: true,
    });

    render(<CopyAdviceButton advice="Keep going. You are doing great." />);

    fireEvent.click(screen.getByRole("button", { name: /copy advice/i }));

    await waitFor(() => {
      expect(writeText).toHaveBeenCalledWith(
        "Keep going. You are doing great.",
      );
    });

    expect(screen.getByText("Copied!")).toBeInTheDocument();
  });

  it("is disabled when there is no advice", () => {
    render(<CopyAdviceButton advice="" />);

    expect(screen.getByRole("button", { name: /copy advice/i })).toBeDisabled();
  });
});
