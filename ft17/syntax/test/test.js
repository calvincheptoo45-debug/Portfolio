const mergeUsers = require("../index");

test("merges multiple arrays and adds date", () => {
  const result = mergeUsers(["a"], ["b", "c"]);

  expect(result.users).toEqual(["a", "b", "c"]);
  expect(result.date).toBeDefined();
});