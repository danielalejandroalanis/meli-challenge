import { render, screen } from "@testing-library/react";
import { ItemDetailData } from "../../components/ItemDetail/ItemDetailData/ItemDetailData";

describe("ItemDetailData", () => {
  const mockProps = {
    condition: "Nuevo",
    soldQuantity: 5,
    title: "iPhone 14 Pro",
    amount: 999999.99,
    currency: "ARS",
  };

  it("renders all product information correctly", () => {
    render(<ItemDetailData {...mockProps} />);

    expect(screen.getByText("Nuevo - 5 vendidos")).toBeInTheDocument();

    expect(screen.getByText("iPhone 14 Pro")).toBeInTheDocument();

    expect(screen.getByText("$ 999.999,99")).toBeInTheDocument();
  });

  it("renders condition without sold quantity when soldQuantity is 0", () => {
    render(<ItemDetailData {...mockProps} soldQuantity={0} />);

    expect(screen.getByText("Nuevo")).toBeInTheDocument();
    expect(screen.queryByText(/vendidos/)).not.toBeInTheDocument();
  });

  it("formats currency correctly", () => {
    render(<ItemDetailData {...mockProps} amount={1234.56} currency="ARS" />);

    expect(screen.getByText("$ 1.234,56")).toBeInTheDocument();
  });
});
