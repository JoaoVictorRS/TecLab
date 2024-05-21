import { DateTime } from 'luxon'
import {BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import type { BelongsTo} from '@adonisjs/lucid/types/relations'
import Produto from './produto.js'

export default class Estoque extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare quantidade: number

  @column()
  declare dataEntrada: DateTime

  @column()
  declare dataSaida: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Produto)
  declare produto: BelongsTo<typeof Produto>
}