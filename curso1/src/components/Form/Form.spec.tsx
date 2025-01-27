import "@testing-library/jest-dom";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Forms } from "./Forms";

const handleSubmitForm = jest.fn();

describe("<Form/>", () => {
  it("should render default correctly", () => {
    render(<Forms handleSubmitForm={handleSubmitForm} />);

    const inputName = screen.getByRole("textbox", { name: "Nome" });
    const inputLastName = screen.getByRole("textbox", { name: "Sobrenome" });
    const buttonSubmit = screen.getByRole("button", { name: /enviar/i });

    expect(inputName).toBeVisible();
    expect(inputLastName).toBeVisible();
    expect(buttonSubmit).toBeVisible();
  });

  it("should show error message when fields was empty", async () => {
    render(<Forms handleSubmitForm={handleSubmitForm} />);

    const buttonSubmit = screen.getByRole("button", { name: /enviar/i });

    await act(async () => {
      await userEvent.click(buttonSubmit);
    });

    await waitFor(() => {
      expect(
        screen.getByText("Por favor, informe um nome válido")
      ).toBeVisible();
      expect(
        screen.getByText("Por favor, informe um sobrenome válido")
      ).toBeVisible();
    });
  });

  it("should type into name and lastName fields and submit form", async () => {
    render(<Forms handleSubmitForm={handleSubmitForm} />);

    const mockName = "Beatriz";
    const mockLastName = "Zanchin";
    const mockResponse = {
      name: mockName,
      lastName: mockLastName,
    };

    const inputName = screen.getByRole("textbox", { name: "Nome" });
    const inputLastName = screen.getByRole("textbox", { name: "Sobrenome" });
    const buttonSubmit = screen.getByRole("button", { name: /enviar/i });

    await act(async () => {
      await userEvent.type(inputName, mockName);
      await userEvent.type(inputLastName, mockLastName);
      await userEvent.click(buttonSubmit);
    });

    await waitFor(() => {
      expect(
        screen.queryByText("Por favor, informe um nome válido")
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Por favor, informe um sobrenome válido")
      ).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(inputName).toHaveValue(mockName);
      expect(inputLastName).toHaveValue(mockLastName);
    });

    await waitFor(() => {
      expect(handleSubmitForm).toHaveBeenCalledTimes(1);
      expect(handleSubmitForm).toHaveBeenCalledWith(
        mockResponse,
        expect.anything()
      );
    });
  });
});
