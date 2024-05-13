import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome_produto', 100).notNullable()
      table.decimal('preco').notNullable()
      table.text('descricao').nullable()
      table.integer('categoria_id').unsigned().references('id').inTable('categorias').notNullable()
      table.integer('estoque_id').unsigned().references('id').inTable('estoques').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}