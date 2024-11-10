import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { SearchItem } from "../../components/SearchItem/SearchItem";

const mockCategories = ["Electronics", "Computers", "Laptops"];
const mockItems = [
  {
    id: "MLA1234",
    picture: "http://http2.mlstatic.com/D_714165-MLA80151749078_112024-O.jpg",
    title: "Test Product",
    price: {
      currency: "ARS",
      amount: 12349.99,
    },
    free_shipping: false,
  },
];

describe("SearchItem", () => {
  const renderSearchItem = () => {
    return render(
      <BrowserRouter>
        <SearchItem categories={mockCategories} items={mockItems} />
      </BrowserRouter>,
    );
  };

  it("renders the component with categories and items", () => {
    renderSearchItem();

    mockCategories.forEach((category) => {
      expect(screen.getByText(category, { exact: false })).toBeInTheDocument();
    });

    // Check if item content is rendered
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "http://http2.mlstatic.com/D_714165-MLA80151749078_112024-O.jpg",
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", "/items/MLA1234");
  });

  it("renders with empty categories", () => {
    render(
      <BrowserRouter>
        <SearchItem categories={[]} items={mockItems} />
      </BrowserRouter>,
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });

  it("renders with empty items", () => {
    render(
      <BrowserRouter>
        <SearchItem categories={mockCategories} items={[]} />
      </BrowserRouter>,
    );

    mockCategories.forEach((category) => {
      expect(screen.getByText(category, { exact: false })).toBeInTheDocument();
    });
  });
});
