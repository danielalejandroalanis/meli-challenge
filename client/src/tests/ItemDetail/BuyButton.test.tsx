import { render, screen } from "@testing-library/react";
import { BuyButton } from "../../components/ItemDetail/BuyButton/BuyButton";

describe("BuyButton", () => {
  it("should render the buy button with correct text", () => {
    render(<BuyButton />);

    const button = screen.getByRole("button", { name: /comprar/i });

    expect(button).toBeInTheDocument();
  });

  it("should have the correct style class", () => {
    const { container } = render(<BuyButton />);

    expect(container.firstChild).toHaveClass("buttonStyle");
  });
});
