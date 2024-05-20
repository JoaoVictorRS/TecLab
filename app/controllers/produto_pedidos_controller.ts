import ProdutoPedido from '#models/produto_pedido'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProdutoPedidosController {
  async index({request}: HttpContext) {
  
      const page = request.input('page', 1)
      const howMany = request.input('howMany', 5)
  
      return await ProdutoPedido.query().paginate(page, howMany)
    }
  
    async show({params}: HttpContext){
      return await ProdutoPedido.findOrFail(params.id)
    }
    
    async store({request}: HttpContext){
  
      const dados = request.only(['pedidoId', 'produtoId', 'quantidade'])
  
      return await ProdutoPedido.create(dados)
    }
  
    async update({params, request}: HttpContext){
      const produto = await ProdutoPedido.findOrFail(params.id)
      const dados = request.only(['pedidoId', 'produtoId', 'quantidade'])
  
      produto.merge(dados)
  
      return await produto.save()
    }
  
    async destroy({params}: HttpContext){
      const produto = await ProdutoPedido.findOrFail(params.id)
      
      await produto.delete()
      return {msg: 'Registro deletedo com sucesso', produto}
    }
}