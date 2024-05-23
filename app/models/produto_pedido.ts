import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Produto from './produto.js'
import Pedido from './pedido.js'

export default class ProdutoPedido extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare pedidoId: number

  @column()
  declare produtoId: number

  @column()
  declare quantidade: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Produto)
  declare produto: BelongsTo<typeof Produto>

  @belongsTo(() => Pedido)
  declare pedido: BelongsTo<typeof Pedido>
}