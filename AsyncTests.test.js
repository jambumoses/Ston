const api = require("./AsyncTests");

test("testing async function", async () => {
  const data = await api();
  expect(data).toBe("done");
});
