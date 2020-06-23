exports.seed = function (knex) {
  return knex("users").insert([
    {
      id: 1,
      email: "itsallgoodmon@gmail.com",
      password: "abc123",
      username: "dreadedlion",
      role: "patient",
    },
    {
      id: 2,
      email: "gunslinger123@hotmail.com",
      password: "cba321",
      username: "cowboyclient",
      role: "provider",
    },
    {
      id: 3,
      email: "funnyguy@aol.com",
      password: "a1b2c3",
      username: "eddieble",
      role: "patient",
    },
    {
      id: 4,
      email: "flimmyflob@ymail.com",
      password: "aaa111",
      username: "jimmybob",
      role: "provider",
    },
    {
      id: 5,
      email: "fatcat@batshat.com",
      password: "cat231",
      username: "twitchycat",
      role: "patient",
    },
  ]);
};
