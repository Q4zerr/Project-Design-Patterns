function transformUsers(users) {
  if (!Array.isArray(users)) {
    throw new Error("Users must be provided.");
  }

  users.forEach((user) => {
    if (typeof user === "string") {
      throw new Error("Users must be provided.");
    }
  });

  if (users.length > 3) {
    throw new Error("Too many users provided.");
  }

  function removeBody(users) {
    return users.map((user) => {
      const {
        id,
        body: { userName, userAge },
      } = user;
      return { id, name: userName, age: userAge };
    });
  }

  const updatedUsers = removeBody(users);

  return updatedUsers;
}

module.exports = { transformUsers };
