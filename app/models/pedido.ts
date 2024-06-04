import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Entrega from './entrega.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Cliente from './cliente.js'
import Produto from './produto.js'

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare precoTotal: number

  @column()
  declare formaPagamento: string

  @column.dateTime()
  declare dataPedido: DateTime

  @column()
  declare clienteId: number

  @column()
  declare entregaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Cliente)
  declare cliente: BelongsTo<typeof Cliente>

  @belongsTo(() => Entrega)
  declare entrega: BelongsTo<typeof Entrega>

  @manyToMany(() => Produto, {
    'pivotTable': 'produto_pedidos',
  })
  declare produtos: ManyToMany<typeof Produto>
}