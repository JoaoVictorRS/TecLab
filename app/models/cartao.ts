import { DateTime } from 'luxon'
import {BaseModel, column, hasMany} from '@adonisjs/lucid/orm'
import type { HasMany} from '@adonisjs/lucid/types/relations'
import Cliente from './cliente.js'

export default class Cartao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare numeroCartao: string

  @column()
  declare nomeTitular: string

  @column.dateTime()
  declare dataValidade: DateTime

  @column()
  declare tipoCartao: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Cliente)
  declare cliente: HasMany<typeof Cliente>
}