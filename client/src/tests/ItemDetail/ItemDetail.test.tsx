import { render, screen, waitFor } from "@testing-library/react";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { getCategories } from "../../services";

jest.mock("../../services", () => ({
  getCategories: jest.fn(),
}));

describe("ItemDetail", () => {
  const mockItem = {
    category_id: "MLA1234",
    picture: "http://http2.mlstatic.com/D_714165-MLA80151749078_112024-O.jpg",
    title: "Test Product",
    condition: "new",
    sold_quantity: 5,
    price: {
      currency: "ARS",
      amount: 1234.56,
    },
  };

  const mockDescription = "Test description";
  const mockCategories = {
    categories: ["Category 1", "Category 2", "Category 3"],
  };

  beforeEach(() => {
    (getCategories as jest.Mock).mockResolvedValue(mockCategories);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all child components with correct props", async () => {
    render(<ItemDetail item={mockItem} description={mockDescription} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockItem.picture);
    expect(image).toHaveAttribute("alt", mockItem.title);

    expect(screen.getByText(mockDescription)).toBeInTheDocument();

    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${mockItem.condition} - ${mockItem.sold_quantity} vendidos`,
      ),
    ).toBeInTheDocument();

    expect(screen.getByRole("button")).toBeInTheDocument();

    await waitFor(() => {
      mockCategories.categories.forEach((category) => {
        expect(
          screen.getByText((content) => content.includes(category)),
        ).toBeInTheDocument();
      });
    });

    await waitFor(() => {
      mockCategories.categories.forEach((category) => {
        expect(
          screen.getByText((content) => content.includes(category)),
        ).toBeInTheDocument();
      });
    });
  });

  it("handles empty categories gracefully", async () => {
    (getCategories as jest.Mock).mockResolvedValue({ categories: [] });

    render(<ItemDetail item={mockItem} description={mockDescription} />);

    await waitFor(() => {
      expect(getCategories).toHaveBeenCalledWith(mockItem.category_id);
    });
  });

  it("handles failed categories fetch", async () => {
    (getCategories as jest.Mock).mockResolvedValue(null);

    render(<ItemDetail item={mockItem} description={mockDescription} />);

    await waitFor(() => {
      expect(getCategories).toHaveBeenCalledWith(mockItem.category_id);
    });
  });
});
