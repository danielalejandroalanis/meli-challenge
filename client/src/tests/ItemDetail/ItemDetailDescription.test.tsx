import { render, screen } from "@testing-library/react";
import { ItemDetailDescription } from "../../components/ItemDetail/ItemDetailDescription/ItemDetailDescription";

describe("ItemDetailDescription", () => {
  it("renders description when provided", () => {
    const mockDescription = "This is a test description";
    render(<ItemDetailDescription description={mockDescription} />);

    expect(screen.getByText("Descripción del producto")).toBeInTheDocument();
    expect(screen.getByText(mockDescription)).toBeInTheDocument();
  });

  it("does not render anything when description is empty", () => {
    render(<ItemDetailDescription description="" />);

    expect(
      screen.queryByText("Descripción del producto"),
    ).not.toBeInTheDocument();
  });
});
