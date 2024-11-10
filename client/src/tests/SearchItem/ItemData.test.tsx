import { render, screen } from "@testing-library/react";
import { ItemData } from "../../components/SearchItem/ItemCards/ItemData/ItemData";

describe("ItemData Component", () => {
  const defaultProps = {
    amount: 1500,
    currency: "ARS",
    title: "Test Product",
  };

  test("renders price and title correctly", () => {
    render(<ItemData {...defaultProps} />);

    expect(screen.getByText(/\$ 1\.500,00/)).toBeInTheDocument();

    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });

  test("shows shipping icon when shipping prop is true", () => {
    render(<ItemData {...defaultProps} shipping={true} />);

    expect(screen.getByTestId("shipping-icon")).toBeInTheDocument();
  });

  test("does not show shipping icon when shipping prop is false", () => {
    render(<ItemData {...defaultProps} shipping={false} />);

    expect(screen.queryByTestId("shipping-icon")).not.toBeInTheDocument();
  });

  test("formats different currency amounts correctly", () => {
    render(<ItemData {...defaultProps} amount={2500.5} currency="USD" />);

    expect(screen.getByText(/\$ 2.500,50/)).toBeInTheDocument();
  });
});
