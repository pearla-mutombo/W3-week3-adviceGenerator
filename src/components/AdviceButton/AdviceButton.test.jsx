import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AdviceButton from "./AdviceButton";

describe("AdviceButton", () => {
  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();

    render(<AdviceButton onClick={handleClick} />);

    fireEvent.click(
      screen.getByRole("button", { name: /get new advice/i }),
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled while loading", () => {
    render(<AdviceButton onClick={vi.fn()} disabled loading />);

    expect(
      screen.getByRole("button", { name: /get new advice/i }),
    ).toBeDisabled();
  });

  it("shows Loading while loading", () => {
    render(<AdviceButton onClick={vi.fn()} loading />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});