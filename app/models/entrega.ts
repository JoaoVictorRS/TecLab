import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Pedido from './pedido.js'

export default class Entrega extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare empresaEntrega: string

  @column()
  declare codRastreio: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Pedido)
  declare pedido: HasMany<typeof Pedido>
}