import { DateTime } from 'luxon'
import {BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import type { BelongsTo} from '@adonisjs/lucid/types/relations'
import Cliente from './cliente.js'

export default class Cartao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare numeroCartao: string

  @column()
  declare nomeTitular: string

  @column()
  declare dataValidade: DateTime

  @column()
  declare tipoCartao: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Cliente)
  declare cliente: BelongsTo<typeof Cliente>
}