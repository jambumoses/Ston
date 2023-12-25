const fetchData = require("./callbacks");

test("fetching data", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("helo");
      done();
    } catch (err) {
      done(err);
    }
  }

  fetchData(callback);
});
