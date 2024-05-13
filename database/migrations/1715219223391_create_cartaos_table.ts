import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cartaos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('numero_cartao', 18).unique().notNullable()
      table.string('nome_titular', 100).notNullable()
      table.timestamp('data_validade').notNullable()
      table.string('tipo_cartao', 20).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}