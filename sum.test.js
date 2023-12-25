const { sum, obj_info, message } = require("./sum");

// toBe
test("test case", () => {
  expect(sum(10, 20)).toBe(30);
});

// not toBe
test("test case two", () => {
  expect(sum(10, 20)).not.toBe(300);
});

// testing objects
// toEqual
test("testing object", () => {
  expect(obj_info()).toEqual({ username: "jamb" });
});

// strings 
// string as function output
// string as variable
const greet = "hello jamb";

//match complete string
//match part of string
//no match case
test("string checking", () => {
  //expect(message()).toMatch("hello");
  expect(greet).toMatch("hello");
});

//match part of string
test("part of string checking", () => {
  //expect(message()).toMatch("hello");
  expect(greet).toMatch(/ll/);
});

//not match string
test("not matching string check", () => {
    expect(message()).toMatch("hello");
    //expect(message()).not.toMatch("hello");
  });
  