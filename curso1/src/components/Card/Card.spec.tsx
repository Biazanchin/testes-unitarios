import "@testing-library/jest-dom";
import Card from "./Card";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<Card />", () => {
  it("should render component by default", () => {
    render(<Card />);

    const divElement = screen.getByRole("contentinfo");

    expect(divElement).toBeVisible();
  });

  it("should render async component", async () => {
    render(<Card />);

    const mainElement = await screen.findByRole("main");

    expect(mainElement).toBeVisible();
  });

  fit("should open component when button was clicked", async () => {
    render(<Card />);

    const buttonElement = screen.getByRole("button", { name: "Open" });

    expect(buttonElement).toBeVisible();

    expect(screen.queryByRole("main")).not.toBeInTheDocument();

    fireEvent.click(buttonElement);

    const mainElement = screen.getByRole("main");

    expect(mainElement).toBeVisible();
  });
});
