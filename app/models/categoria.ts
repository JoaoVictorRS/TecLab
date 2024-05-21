import { DateTime } from 'luxon'
import {BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import type { BelongsTo} from '@adonisjs/lucid/types/relations'
import Produto from './produto.js'

export default class Categoria extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nomeCategoria: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Produto)
  declare prodduto: BelongsTo<typeof Produto>
}