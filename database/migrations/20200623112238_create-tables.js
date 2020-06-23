exports.up = function (knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments()
      tbl
        .string('email', 255)
        .notNullable()
        .unique()
      tbl
        .string('role', 255)
        .notNullable()
      tbl
        .string('password', 255)
        .notNullable()
      tbl
        .string('username', 255)
        .notNullable()
        .unique()
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('users')
};
