import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Cliente.createMany([
      {
        nome: 'Fulano de Tal',
        telefone: '(11) 98765-4321',
        email: 'fulano@email.com',
        cartaoId: 1,
        enderecoId: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nome: 'Beltrano da Silva',
        telefone: '(21) 2345-6789',
        email: 'beltrano@email.com',
        cartaoId: 2,
        enderecoId: 2,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nome: 'Ciclano de Souza',
        telefone: '(31) 9876-5432',
        email: 'ciclano@email.com',
        cartaoId: 3,
        enderecoId: 3,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nome: 'Joana Oliveira',
        telefone: '(41) 2345-1234',
        email: 'joana@email.com',
        cartaoId: 4,
        enderecoId: 4,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nome: 'Maria Santos',
        telefone: '(51) 9876-3452',
        email: 'maria@email.com',
        cartaoId: 5,
        enderecoId: 5,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nome: 'Pedro Pereira',
        telefone: '(61) 2345-7890',
        email: 'pedro@email.com',
        cartaoId: 6,
        enderecoId: 6,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nome: 'Ana Souza',
        telefone: '(71) 9876-1234',
        email: 'ana@email.com',
        cartaoId: 7,
        enderecoId: 7,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nome: 'Carlos Silva',
        telefone: '(81) 2345-4321',
        email: 'carlos@email.com',
        cartaoId: 8,
        enderecoId: 8,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      }
    ])
  }
}