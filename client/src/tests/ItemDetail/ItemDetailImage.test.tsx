import { render, screen } from "@testing-library/react";
import { ItemDetailImage } from "../../components/ItemDetail/ItemDetailImage/ItemDetailImage";

describe("ItemDetailImage", () => {
  const mockProps = {
    picture: "http://http2.mlstatic.com/D_714165-MLA80151749078_112024-O.jpg",
    title: "Test Product Image",
  };

  it("renders image with correct src and alt attributes", () => {
    render(<ItemDetailImage {...mockProps} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockProps.picture);
    expect(image).toHaveAttribute("alt", mockProps.title);
  });

  it("applies correct styling", () => {
    render(<ItemDetailImage {...mockProps} />);

    const image = screen.getByRole("img");
    expect(image).toHaveStyle({ objectFit: "contain" });
    expect(image).toHaveClass("ImageStyle");
  });
});
