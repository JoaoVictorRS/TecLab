import Categoria from '#models/categoria'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Categoria.createMany([
      {
        nomeCategoria: 'Notebooks',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeCategoria: 'Monitores',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeCategoria: 'Teclados',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeCategoria: 'Mouses',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeCategoria: 'Headsets',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeCategoria: 'Armazenamento',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeCategoria: 'Placas de Vídeo',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeCategoria: 'Processadores',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeCategoria: 'Placas-Mãe',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeCategoria: 'Memórias RAM',
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      }
    ])
  }
}