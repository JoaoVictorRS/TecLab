import Produto from '#models/produto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await Produto.createMany([
      {
        nomeProduto: 'Notebook Dell Inspiron 15',
        preco: 3500.00,
        descricao: 'Notebook Dell Inspiron 15 com processador Intel Core i7, 16GB de RAM, SSD de 512GB, e tela Full HD de 15.6 polegadas.',
        categoriaId: 1,  // Notebooks
        estoqueId: 1,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeProduto: 'Monitor LG UltraWide 29"',
        preco: 1200.00,
        descricao: 'Monitor LG UltraWide de 29 polegadas, resolução Full HD, painel IPS, com múltiplas conexões e ajuste de altura.',
        categoriaId: 2,  // Monitores
        estoqueId: 2,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeProduto: 'Teclado Mecânico HyperX Alloy FPS Pro',
        preco: 450.00,
        descricao: 'Teclado mecânico HyperX Alloy FPS Pro, switches Cherry MX Red, formato compacto, ideal para gamers.',
        categoriaId: 3,  // Teclados
        estoqueId: 3,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeProduto: 'Mouse Logitech MX Master 3',
        preco: 400.00,
        descricao: 'Mouse Logitech MX Master 3, design ergonômico, sensor de alta precisão, conexão via Bluetooth ou receptor USB.',
        categoriaId: 4,  // Mouses
        estoqueId: 4,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeProduto: 'Headset Razer Kraken Tournament Edition',
        preco: 600.00,
        descricao: 'Headset Razer Kraken Tournament Edition com som surround 7.1, microfone retrátil, e controles de áudio no fio.',
        categoriaId: 5,  // Headsets
        estoqueId: 5,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeProduto: 'SSD Samsung 970 EVO Plus 1TB',
        preco: 1100.00,
        descricao: 'SSD Samsung 970 EVO Plus com 1TB de capacidade, interface NVMe M.2, velocidades de leitura e escrita ultrarrápidas.',
        categoriaId: 6,  // Armazenamento
        estoqueId: 6,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeProduto: 'Placa de Vídeo NVIDIA GeForce RTX 3080',
        preco: 5000.00,
        descricao: 'Placa de Vídeo NVIDIA GeForce RTX 3080 com 10GB de memória GDDR6X, suporte a Ray Tracing, e desempenho extremo para jogos.',
        categoriaId: 7,  // Placas de Vídeo
        estoqueId: 7,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeProduto: 'Processador AMD Ryzen 9 5900X',
        preco: 2500.00,
        descricao: 'Processador AMD Ryzen 9 5900X com 12 núcleos e 24 threads, clock base de 3.7GHz e boost de até 4.8GHz.',
        categoriaId: 8,  // Processadores
        estoqueId: 8,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeProduto: 'Placa-Mãe ASUS ROG Strix B550-F Gaming',
        preco: 1000.00,
        descricao: 'Placa-Mãe ASUS ROG Strix B550-F Gaming com suporte a processadores AMD Ryzen, PCIe 4.0, e rede de alta velocidade.',
        categoriaId: 9,  // Placas-Mãe
        estoqueId: 9,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
      {
        nomeProduto: 'Memória RAM Corsair Vengeance LPX 16GB (2x8GB) DDR4',
        preco: 800.00,
        descricao: 'Kit de Memória RAM Corsair Vengeance LPX 16GB (2x8GB) DDR4, 3200MHz, ideal para desempenho em jogos e aplicações.',
        categoriaId: 10,  // Memórias RAM
        estoqueId: 10,
        createdAt: DateTime.local(),
        updatedAt: DateTime.local()
      },
    ])
  }
}