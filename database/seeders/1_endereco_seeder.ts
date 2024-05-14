import Endereco from '#models/endereco'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Endereco.createMany([
      {
        endereco: 'Rua dos Ipês, 123 - Centro, Cidade A',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        endereco: 'Avenida das Palmeiras, 456 - Bairro X, Cidade B',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()      
      },
      {
        endereco: 'Rua das Rosas, 789 - Jardim Y, Cidade C',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        endereco: 'Praça dos Cravos, 1011 - Centro, Cidade D',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        endereco: 'Avenida das Margaridas, 1315 - Bairro Z, Cidade E',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        endereco: 'Rua dos Lírios, 1618 - Vila W, Cidade F',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        endereco: 'Praça das Orquídeas, 1921 - Centro, Cidade G',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        endereco: 'Avenida das Violetas, 2224 - Bairro V, Cidade H',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        endereco: 'Rua dos Girassóis, 2527 - Jardim U, Cidade I',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        endereco: 'Praça dos Tulipas, 2830 - Centro, Cidade J',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      }
    ])
  }
}