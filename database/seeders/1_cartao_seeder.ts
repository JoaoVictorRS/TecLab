import Cartao from '#models/cartao'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Cartao.createMany([
      {
        numeroCartao: '1234567890123456',
        nomeTitular: 'Fulano de Tal',
        dataValidade: DateTime.fromISO('2025-12-31'),
        tipoCartao: 'Visa',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        numeroCartao: '9876543210987654',
        nomeTitular: 'Beltrano da Silva',
        dataValidade: DateTime.fromISO('2027-01-10'),
        tipoCartao: 'Mastercard',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        numeroCartao: '0000000000000000',
        nomeTitular: 'Ciclano de Souza',
        dataValidade: DateTime.fromISO('2026-06-30'),
        tipoCartao: 'Elo',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        numeroCartao: '4567890123456789',
        nomeTitular: 'João Pereira',
        dataValidade: DateTime.fromISO('2028-05-25'),
        tipoCartao: 'American Express',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        numeroCartao: '7894561234567890',
        nomeTitular: 'Maria Oliveira',
        dataValidade: DateTime.fromISO('2026-02-14'),
        tipoCartao: 'Diners Club',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      }
    ])
  }
}