import { render, screen } from "@testing-library/react";
import { Navbar } from "../../components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
  });

  it("should render the navbar component", () => {
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });
  it("should render the Logo component", () => {
    const logoContainer = screen.getByRole("link", {
      name: /logo de mercado libre/i,
    });
    expect(logoContainer).toBeInTheDocument();
  });

  it("should render the SearchBox component", () => {
    const searchBox = screen.getByRole("textbox");
    expect(searchBox).toBeInTheDocument();
  });
});
