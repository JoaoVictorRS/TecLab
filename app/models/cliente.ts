import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo  } from '@adonisjs/lucid/types/relations'
import Cartao from './cartao.js'
import Endereco from './endereco.js'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare telefone: string

  @column()
  declare email: string

  @column()
  declare cartaoId: number

  @column()
  declare enderecoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Cartao)
  declare cartao: BelongsTo<typeof Cartao>

  @belongsTo(()=>Endereco)
  declare endereco: BelongsTo<typeof Endereco>
}