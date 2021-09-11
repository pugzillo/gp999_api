exports.up = function (knex) {
  return knex.schema.createTable("topNine", (table) => {
    table.integer("trainee_id").primary();
    table.foreign("trainee_id").references("trainees.trainee_id");
    table.integer("rank");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("topNine");
};
