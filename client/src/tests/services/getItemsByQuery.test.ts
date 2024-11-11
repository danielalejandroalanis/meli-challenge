import { api } from "../../services/baseUrl";
import { getItemsByQuery } from "../../services/getItemsByQuery";

jest.mock("../../services/baseUrl", () => ({
  api: {
    get: jest.fn(),
  },
}));

describe("getItemsByQuery", () => {
  const mockSearchParams = "iphone";
  const mockResponse = {
    data: {
      items: [
        {
          id: "MLA123",
          title: "iPhone 13",
          price: 1200000.99,
        },
        {
          id: "MLA124",
          title: "iPhone 12",
          price: 1200000.99,
        },
      ],
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch items by search query successfully", async () => {
    (api.get as jest.Mock).mockResolvedValueOnce(mockResponse);

    const result = await getItemsByQuery(mockSearchParams);

    expect(api.get).toHaveBeenCalledWith(`/api/items?q=${mockSearchParams}`);

    expect(result).toEqual(mockResponse);
  });

  it("should handle empty search params", async () => {
    (api.get as jest.Mock).mockResolvedValueOnce({ data: { items: [] } });

    const result = await getItemsByQuery("");

    expect(api.get).toHaveBeenCalledWith("/api/items?q=");

    expect(result).toEqual({ data: { items: [] } });
  });

  it("should handle errors gracefully", async () => {
    const mockError = new Error("Network error");
    (api.get as jest.Mock).mockRejectedValueOnce(mockError);

    await expect(getItemsByQuery(mockSearchParams)).rejects.toThrow(mockError);
  });

  it("should encode search parameters correctly", async () => {
    const searchWithSpaces = "iPhone 13 Pro";
    (api.get as jest.Mock).mockResolvedValueOnce(mockResponse);

    await getItemsByQuery(searchWithSpaces);

    expect(api.get).toHaveBeenCalledWith("/api/items?q=iPhone%2013%20Pro");
  });
});
