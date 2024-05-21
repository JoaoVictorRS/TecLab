import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Categoria from './categoria.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Estoque from './estoque.js'
import Pedido from './pedido.js'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nomeProduto: string

  @column()
  declare preco: number

  @column()
  declare descricao: string

  @column()
  declare categoriaId: number

  @column()
  declare estoqueId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Categoria)
  declare categoria: BelongsTo<typeof Categoria>

  @belongsTo(() => Estoque)
  declare estoque: BelongsTo<typeof Estoque>

  @manyToMany(() => Pedido, {
    'pivotTable': 'produto_pedidos',
  })
  declare pedidos: ManyToMany<typeof Pedido>
}