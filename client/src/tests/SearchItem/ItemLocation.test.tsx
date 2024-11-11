import { render, screen, waitFor } from "@testing-library/react";
import { ItemLocation } from "../../components/SearchItem/ItemCards/ItemLocation/ItemLocation";
import { getLocation } from "../../services";

jest.mock("../../services", () => ({
  getLocation: jest.fn(),
}));

describe("ItemLocation Component", () => {
  // Clear mock between tests
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders location when API call succeeds", async () => {
    // Arrange
    const mockLocation = { location: "Buenos Aires" };
    (getLocation as jest.Mock).mockResolvedValue(mockLocation);
    // ... rest of the test remains the same
  });

  it("renders fallback text when location is not available", async () => {
    // Arrange
    (getLocation as jest.Mock).mockResolvedValue(null);

    // Act
    render(<ItemLocation id="123" />);

    // Assert
    await waitFor(() => {
      expect(screen.getByText("No disponible")).toBeInTheDocument();
      expect(getLocation).toHaveBeenCalledWith("123");
    });
  });
});
