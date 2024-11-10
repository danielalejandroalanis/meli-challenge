import { render, screen } from "@testing-library/react";
import { ItemImage } from "../../components/SearchItem/ItemCards/ItemImage/ItemImage";

describe("ItemImage Component", () => {
  it("renders image with correct src and alt attributes", () => {
    const mockProps = {
      picture: "test-image-url.jpg",
      title: "Test Product",
    };

    render(<ItemImage {...mockProps} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockProps.picture);
    expect(image).toHaveAttribute("alt", mockProps.title);
  });
});
