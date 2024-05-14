import Pedido from '#models/pedido'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Pedido.createMany([
      { 
        precoTotal: 100.50,
        formaPagamento: 'Cartão de Crédito',
        dataPedido: DateTime.fromISO('2024-05-13T10:00:00'),
        clienteId: 1,
        entregaId: 1,
        updatedAt: DateTime.local()
      },
      { 
        precoTotal: 75.30,
        formaPagamento: 'Dinheiro',
        dataPedido: DateTime.fromISO('2024-05-14T11:30:00'),
        clienteId: 2,
        entregaId: 2,
        updatedAt: DateTime.local()
      },
      { 
        precoTotal: 120.80,
        formaPagamento: 'Boleto Bancário',
        dataPedido: DateTime.fromISO('2024-05-15T09:45:00'),
        clienteId: 3,
        entregaId: 3,
        updatedAt: DateTime.local()
      },
      { 
        precoTotal: 50.00,
        formaPagamento: 'Cartão de Débito',
        dataPedido: DateTime.fromISO('2024-05-16T14:20:00'),
        clienteId: 4,
        entregaId: 4,
        updatedAt: DateTime.local()
      },
      { 
        precoTotal: 90.75,
        formaPagamento: 'Pix',
        dataPedido: DateTime.fromISO('2024-05-17T16:50:00'),
        clienteId: 5,
        entregaId: 5,
        updatedAt: DateTime.local()
      },
      { 
        precoTotal: 200.00,
        formaPagamento: 'Transferência Bancária',
        dataPedido: DateTime.fromISO('2024-05-18T08:30:00'),
        clienteId: 6,
        entregaId: 6,
        updatedAt: DateTime.local()
      },
      { 
        precoTotal: 60.20,
        formaPagamento: 'Cartão de Crédito',
        dataPedido: DateTime.fromISO('2024-05-19T11:15:00'),
        clienteId: 7,
        entregaId: 7,
        updatedAt: DateTime.local()
      },
      { 
        precoTotal: 85.90,
        formaPagamento: 'Dinheiro',
        dataPedido: DateTime.fromISO('2024-05-20T15:40:00'),
        clienteId: 8,
        entregaId: 8,
        updatedAt: DateTime.local()
      },
      { 
        precoTotal: 110.35,
        formaPagamento: 'Boleto Bancário',
        dataPedido: DateTime.fromISO('2024-05-21T13:00:00'),
        clienteId: 9,
        entregaId: 9,
        updatedAt: DateTime.local()
      },
      { 
        precoTotal: 75.60,
        formaPagamento: 'Cartão de Débito',
        dataPedido: DateTime.fromISO('2024-05-22T10:30:00'),
        clienteId: 10,
        entregaId: 10,
        updatedAt: DateTime.local()
      },
    ])
  }
}