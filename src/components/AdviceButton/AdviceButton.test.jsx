import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AdviceButton from "./AdviceButton";

describe("AdviceButton", () => {
  it("renders the advice button", () => {
    render(<AdviceButton onClick={() => {}} />);

    const button = screen.getByRole("button", {
      name: "Get new advice",
    });

    expect(button).toBeInTheDocument();
  });

  it("calls onClick when the button is clicked", () => {
    const handleClick = vi.fn();

    render(<AdviceButton onClick={handleClick} />);

    const button = screen.getByRole("button", {
      name: "Get new advice",
    });

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when loading", () => {
    render(<AdviceButton onClick={() => {}} disabled={true} loading={true} />);

    const button = screen.getByRole("button", {
      name: "Get new advice",
    });

    expect(button).toBeDisabled();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
