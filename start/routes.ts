/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CartaosController from '#controllers/cartaos_controller'
import CategoriasController from '#controllers/categorias_controller'
import ClientesController from '#controllers/clientes_controller'
import EnderecosController from '#controllers/enderecos_controller'
import EntregasController from '#controllers/entregas_controller'
import EstoquesController from '#controllers/estoques_controller'
import PedidosController from '#controllers/pedidos_controller'
import ProdutoPedidosController from '#controllers/produto_pedidos_controller'
import ProdutosController from '#controllers/produtos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    message: 'Bem vindo a TecLab',
    rotas: [
      {sobre_produtos: '/produtos | /estoques | /categorias'},
      {sobre_clientes: '/clientes | /cartoes | /enderecos'},
      {sobre_pedido: '/pedidos | /entregas | /produto_pedidos'}
    ]
  }
})

//Produtos
router.resource('/produtos', ProdutosController).apiOnly()
router.resource('/estoques', EstoquesController).apiOnly()
router.resource('/categorias', CategoriasController).apiOnly()

//Clientes
router.resource('/clientes', ClientesController).apiOnly()
router.resource('/cartoes', CartaosController).apiOnly()
router.resource('/enderecos', EnderecosController).apiOnly()

//Pedido
router.resource('/pedidos', PedidosController).apiOnly()
router.resource('/entregas', EntregasController).apiOnly()
router.resource('/produto_pedidos', ProdutoPedidosController).apiOnly()