import { api } from "../../services/baseUrl";
import { getCategories } from "../../services/getCategories";

jest.mock("../../services/baseUrl", () => ({
  api: {
    get: jest.fn(),
  },
}));

describe("getCategories", () => {
  const mockId = "MLA123";
  const mockResponse = {
    data: {
      id: "MLA123",
      name: "Electronics",
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch categories successfully", async () => {
    (api.get as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await getCategories(mockId);

    expect(api.get).toHaveBeenCalledWith(`/api/categories/${mockId}`);
    expect(result).toEqual(mockResponse.data);
  });

  it("should handle errors gracefully", async () => {
    const mockError = new Error("Network error");
    (api.get as jest.Mock).mockRejectedValueOnce(mockError);

    const consoleSpy = jest.spyOn(console, "log");

    await expect(getCategories(mockId)).rejects.toEqual(mockError);

    expect(consoleSpy).toHaveBeenCalledWith(mockError);
    consoleSpy.mockRestore();
  });
});
