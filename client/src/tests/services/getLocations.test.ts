import { getLocation } from "../../services/getLocations";
import { api } from "../../services/baseUrl";

jest.mock("../../services/baseUrl");

describe("getLocation", () => {
  it("should fetch location successfully", async () => {
    const mockLocation = { id: "123", name: "Test Location" };
    (api.get as jest.Mock).mockResolvedValueOnce({ data: mockLocation });

    const result = await getLocation("123");
    expect(result).toEqual(mockLocation);
  });

  it("should handle errors gracefully", async () => {
    const mockError = new TypeError(
      "Cannot read properties of undefined (reading 'data')",
    );
    (api.get as jest.Mock).mockRejectedValueOnce(mockError);

    const consoleSpy = jest.spyOn(console, "log");

    await expect(getLocation("123")).rejects.toThrow(
      "Cannot read properties of undefined",
    );

    expect(consoleSpy).toHaveBeenCalledWith(mockError);
    consoleSpy.mockRestore();
  });
});
