import { render, screen } from "@testing-library/react";
import { ItemCategory } from "../../components/ItemCategory/ItemCategory";
import "@testing-library/jest-dom";

describe("ItemCategory", () => {
  it("renders categories with separators correctly", () => {
    const categories = ["Electrónica", "Celulares", "iPhone"];
    render(<ItemCategory itemsCategories={categories} />);

    categories.forEach((category) => {
      expect(screen.getByText(category, { exact: false })).toBeInTheDocument();
    });

    const separators = screen.getAllByText(/>/);
    expect(separators).toHaveLength(2);
  });

  it("applies special class to last category", () => {
    const categories = ["Electrónica", "Celulares"];
    const { container } = render(<ItemCategory itemsCategories={categories} />);

    const lastCategory = container.querySelector(".lastCategorySpan");
    expect(lastCategory).toHaveTextContent("Celulares");
  });

  it("renders empty when no categories are provided", () => {
    const { container } = render(<ItemCategory itemsCategories={[]} />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it("renders single category without separator", () => {
    const categories = ["Electrónica"];
    render(<ItemCategory itemsCategories={categories} />);

    expect(screen.getByText("Electrónica")).toBeInTheDocument();

    const separators = screen.queryAllByText(/>\s*$/i);
    expect(separators).toHaveLength(0);
  });
});
