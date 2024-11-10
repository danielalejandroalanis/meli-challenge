import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBox } from "../../components/NavBar/SearchBox/SearchBox";
import "@testing-library/jest-dom";

describe("SearchBox", () => {
  beforeEach(() => {
    Object.defineProperty(window, "location", {
      value: { href: "" },
      writable: true,
    });
  });

  it("renders search input and button", () => {
    render(<SearchBox />);

    expect(
      screen.getByPlaceholderText("Nunca dejes de buscar"),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "" })).toBeInTheDocument();
  });

  it("updates input value when typing", () => {
    render(<SearchBox />);

    const input = screen.getByPlaceholderText("Nunca dejes de buscar");
    fireEvent.change(input, { target: { value: "test search" } });

    expect(input).toHaveValue("test search");
  });

  it("redirects to search results page on form submission", () => {
    render(<SearchBox />);

    const input = screen.getByPlaceholderText("Nunca dejes de buscar");
    const form = screen.getByTestId("search-form");

    fireEvent.change(input, { target: { value: "test search" } });
    fireEvent.submit(form);

    expect(window.location.href).toBe("/items?search=test search");
  });
});
