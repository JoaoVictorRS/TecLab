import ProdutoPedido from '#models/produto_pedido'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await ProdutoPedido.createMany([
      {
        pedidoId: 1,
        produtoId: 1,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 1,
        produtoId: 6,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 2,
        produtoId: 3,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 2,
        produtoId: 5,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 3,
        produtoId: 2,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 3,
        produtoId: 7,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 4,
        produtoId: 1,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 4,
        produtoId: 4,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 5,
        produtoId: 3,
        quantidade: 2,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 5,
        produtoId: 8,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 6,
        produtoId: 9,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 6,
        produtoId: 10,
        quantidade: 2,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 7,
        produtoId: 1,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 7,
        produtoId: 6,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 8,
        produtoId: 3,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 8,
        produtoId: 5,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 9,
        produtoId: 2,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 9,
        produtoId: 7,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 10,
        produtoId: 1,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        pedidoId: 10,
        produtoId: 4,
        quantidade: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      }
    ])
  }
}