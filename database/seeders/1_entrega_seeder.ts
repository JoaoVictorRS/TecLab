import Entrega from '#models/entrega'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Entrega.createMany([
      {
        empresaEntrega: 'Correios',
        codRastreio: 'AB123456789CD',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        empresaEntrega: 'Transportadora XYZ',
        codRastreio: 'XY9876543210',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        empresaEntrega: 'FEDEX',
        codRastreio: 'FE4321098765',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        empresaEntrega: 'DHL',
        codRastreio: 'DH8765432109',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        empresaEntrega: 'Correios',
        codRastreio: 'AC5678901234',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        empresaEntrega: 'Transportadora XYZ',
        codRastreio: 'XZ2109876543',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        empresaEntrega: 'JadLog',
        codRastreio: 'JL7890123456',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        empresaEntrega: 'TNT',
        codRastreio: 'TN3210987654',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        empresaEntrega: 'Correios',
        codRastreio: 'AD0987654321',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        empresaEntrega: 'Transportadora ABC',
        codRastreio: 'AB4321098765',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      }
    ])
  }
}