import { render, screen, waitFor } from "@testing-library/react";
import { ItemLocation } from "../../components/SearchItem/ItemCards/ItemLocation/ItemLocation";
import { getLocation } from "../../services";

jest.mock("../../services", () => ({
  getLocation: jest.fn(),
}));

describe("ItemLocation Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders location when API call succeeds", async () => {
    const mockLocation = { location: "Buenos Aires" };
    (getLocation as jest.Mock).mockResolvedValue(mockLocation);
  });

  it("renders fallback text when location is not available", async () => {
    (getLocation as jest.Mock).mockResolvedValue(null);

    render(<ItemLocation id="123" />);

    await waitFor(() => {
      expect(screen.getByText("No disponible")).toBeInTheDocument();
      expect(getLocation).toHaveBeenCalledWith("123");
    });
  });
});
