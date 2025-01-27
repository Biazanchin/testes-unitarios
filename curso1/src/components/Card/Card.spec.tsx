import "@testing-library/jest-dom";
import Card from "./Card";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

const mockOnClose = jest.fn();

describe("<Card />", () => {
  it("should render component by default", () => {
    render(<Card name="John" lastName="Doe" onClose={mockOnClose} />);

    const divElement = screen.getByRole("contentinfo");

    expect(divElement).toBeVisible();
  });

  it("should render async component", async () => {
    render(<Card name="John" lastName="Doe" onClose={mockOnClose} />);
    const mainElement = await screen.findByRole("contentinfo");

    expect(mainElement).toBeVisible();
  });

  it("should open component when button was clicked", async () => {
    render(<Card name="John" lastName="Doe" onClose={mockOnClose} />);

    const buttonElement = screen.getByRole("button", { name: "Close" });

    expect(buttonElement).toBeVisible();
    fireEvent.click(buttonElement);

    await waitFor(() => {
      const mainElement = screen.queryByRole("contentinfo");
      expect(mainElement).not.toBeInTheDocument();
    });

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
