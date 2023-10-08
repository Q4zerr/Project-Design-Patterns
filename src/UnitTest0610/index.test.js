const { transformUsers } = require("./index");

describe("transform User", () => {
  it("should throw if no users provided", () => {
    expect(() => transformUsers(123)).toThrow("Users must be provided.");
    expect(() => transformUsers("salut")).toThrow("Users must be provided.");
    expect(() => transformUsers(undefined)).toThrow("Users must be provided.");
    expect(() => transformUsers(null)).toThrow("Users must be provided.");
  });

  it("should throw if users not correct", () => {
    expect(() => transformUsers(["user1", "user2"])).toThrow("Users must be provided.");
  });

  it("should throw if too manyUsers provided", () => {
    expect(() => transformUsers(tooManyUsers)).toThrow("Too many users provided.");
  });

  it("should transform users to the good model", () => {
    expect(transformUsers(users)).toStrictEqual(expectedUsers);
  });
});

const users = [
  {
    id: 0,
    body: {
      userName: "julien",
      userAge: 23,
    },
  },
  {
    id: 1,
    body: {
      userName: "adrien",
      userAge: 58,
    },
  },
  {
    id: 2,
    body: {
      userName: "jules",
      userAge: 7,
    },
  },
];

const expectedUsers = [
  {
    id: 0,
    name: "julien",
    age: 23,
  },
  {
    id: 1,
    name: "adrien",
    age: 58,
  },
  {
    id: 2,
    name: "jules",
    age: 7,
  },
];

const tooManyUsers = users.concat(users).concat(users);
