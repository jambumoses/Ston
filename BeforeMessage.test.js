const { sum, message } = require("./sum");

function common() {
  return "initial data is here";
}

beforeEach(() => {
  console.warn(common());
});

test("test before 1", () => {
  expect(sum(1, 5)).toBe(6);
});

test("test message 1", () => {
  expect(message()).toMatch("hello");
});
