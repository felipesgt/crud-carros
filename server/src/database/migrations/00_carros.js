exports.up = function(knex) {
  return knex.schema.createTable('carros', (table) => {
    table.string('nome').primary();
    table.string('modelo').notNullable();
    table.integer('ano').notNullable();
    table.string('cor').notNullable();
    table.binary('foto').notNullable();
    table.string('cpf').notNullable();
    table.string('ultimodono').notNullable();
    table.integer('kmrod').notNullable();
});
};


exports.down = function(knex) {
  return knex.schema.dropTable('carros');
};