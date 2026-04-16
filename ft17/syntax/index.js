function mergeUsers(...arrays) {
  const mergedUsers = [].concat(...arrays);

  const date = new Date().toISOString().split("T")[0];

  return {
    users: mergedUsers,
    date: date
  };
}

module.exports = mergeUsers;