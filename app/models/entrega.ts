import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

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
}