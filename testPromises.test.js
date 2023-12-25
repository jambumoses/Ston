const API_Information = require("./testPromises");

test("promise testing", () => {
  return API_Information().then((data) => {
    expect(data).toBe("hello");
  });
});
