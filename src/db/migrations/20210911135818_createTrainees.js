exports.up = function (knex) {
  return knex.schema.createTable("trainees", (table) => {
    table.increments("trainee_id").primary(); // trainee_id as primary key
    table.string("trainee_name");
    table.string("korean_name");
    table.string("group");
    table.string("company");
    table.string("country");
    table.string("date_of_birth");
    table.string("year");
    table.integer("height");
    table.string("MBTI");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("trainees");
};
