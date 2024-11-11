import { api } from "../../services/baseUrl";
import { getItemById } from "../../services/getItemById";

jest.mock("../../services/baseUrl", () => ({
  api: {
    get: jest.fn(),
  },
}));

describe("getItemById", () => {
  const mockId = "MLA123";
  const mockResponse = {
    data: {
      id: "MLA123",
      title: "Test Item",
      price: 10000.99,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch item by id successfully", async () => {
    (api.get as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await getItemById(mockId);

    expect(api.get).toHaveBeenCalledWith(`/api/items/${mockId}`);

    expect(result).toEqual(mockResponse);
  });

  it("should handle errors gracefully", async () => {
    const mockError = new Error("Network error");
    (api.get as jest.Mock).mockRejectedValueOnce(mockError);

    try {
      await getItemById(mockId);
    } catch (error) {
      expect(error).toBe(mockError);
    }
  });
});
