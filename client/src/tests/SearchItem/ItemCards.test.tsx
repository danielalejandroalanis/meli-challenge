import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ItemCards } from "../../components/SearchItem/ItemCards/ItemCards";

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

describe("ItemCards", () => {
  const renderItemCards = () => {
    return render(
      <BrowserRouter>
        <ItemCards items={mockItems} />
      </BrowserRouter>,
    );
  };

  it("renders item cards correctly", () => {
    renderItemCards();

    const itemLink = screen.getByRole("link");
    expect(itemLink).toHaveAttribute("href", "/items/MLA1234");

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute(
      "src",
      "http://http2.mlstatic.com/D_714165-MLA80151749078_112024-O.jpg",
    );
    expect(image).toHaveAttribute("alt", "Test Product");

    expect(screen.getByText("Test Product")).toBeInTheDocument();

    expect(screen.getByText(/\$ 12.349,99/)).toBeInTheDocument();
  });

  it("renders multiple items when provided", () => {
    const multipleItems = [
      ...mockItems,
      {
        id: "MLA1235",
        picture:
          "http://http2.mlstatic.com/D_714165-MLA80151749078_112024-O.jpg",
        title: "Test Product",
        price: {
          currency: "ARS",
          amount: 12349.99,
        },
        free_shipping: false,
      },
    ];

    render(
      <BrowserRouter>
        <ItemCards items={multipleItems} />
      </BrowserRouter>,
    );

    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});
