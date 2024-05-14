import Estoque from '#models/estoque'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Estoque.createMany([
      {
        quantidade: 50,
        dataEntrada: DateTime.fromISO('2024-01-10T09:00:00'),
        dataSaida: DateTime.fromISO('2024-01-15T17:00:00'),
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        quantidade: 30,
        dataEntrada: DateTime.fromISO('2024-02-05T10:30:00'),
        dataSaida: DateTime.fromISO('2024-02-10T15:30:00'),
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        quantidade: 20,
        dataEntrada: DateTime.fromISO('2024-03-01T08:45:00'),
        dataSaida: DateTime.fromISO('2024-03-05T14:45:00'),
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        quantidade: 100,
        dataEntrada: DateTime.fromISO('2024-03-20T13:00:00'),
        dataSaida: DateTime.fromISO('2024-03-25T18:00:00'),
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        quantidade: 60,
        dataEntrada: DateTime.fromISO('2024-04-10T11:15:00'),
        dataSaida: DateTime.fromISO('2024-04-15T16:15:00'),
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        quantidade: 80,
        dataEntrada: DateTime.fromISO('2024-04-25T09:30:00'),
        dataSaida: DateTime.fromISO('2024-04-30T14:30:00'),
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        quantidade: 90,
        dataEntrada: DateTime.fromISO('2024-05-05T10:00:00'),
        dataSaida: DateTime.fromISO('2024-05-10T15:00:00'),
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        quantidade: 40,
        dataEntrada: DateTime.fromISO('2024-05-20T11:45:00'),
        dataSaida: DateTime.fromISO('2024-05-25T16:45:00'),
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        quantidade: 70,
        dataEntrada: DateTime.fromISO('2024-06-01T08:30:00'),
        dataSaida: DateTime.fromISO('2024-06-05T13:30:00'),
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        quantidade: 55,
        dataEntrada: DateTime.fromISO('2024-06-15T09:15:00'),
        dataSaida: DateTime.fromISO('2024-06-20T14:15:00'),
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      }
    ])
  }
}