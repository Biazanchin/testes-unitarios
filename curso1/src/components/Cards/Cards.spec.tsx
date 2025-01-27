import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import Cards from "./Card";

describe("<Cards />", () => {
  it("should render Cards", () => {
    render(<Cards />);

    const divElement = screen.getByRole("contentinfo");
    //const title = screen.getByRole("heading");

    //expect(screen.getByTestId("cards")).toBeVisible();
    expect(divElement).toBeVisible();
    expect(within(divElement).getByText(/cards/i)).toBeVisible();
    expect(within(divElement).getByRole("heading")).toBeVisible();
    //expect(title).toBeVisible();
  });
});
