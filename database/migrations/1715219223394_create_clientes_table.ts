import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 64).notNullable()
      table.string('telefone', 18).notNullable()
      table.string('email', 255).notNullable()
      table.integer('cartao_id').unsigned().references('id').inTable('cartaos').notNullable()
      table.integer('endereco_id').unsigned().references('id').inTable('enderecos').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}