import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
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

  @manyToMany(()=> Produto, {
    'pivotTable': 'Produto_id'
  })
  declare produto: ManyToMany<typeof Produto>

  @manyToMany(()=> Pedido, {
    'pivotTable': 'Pedido_id'
  })
  declare pedido: ManyToMany<typeof Pedido>
}