import Pedido from '#models/pedido'
import type { HttpContext } from '@adonisjs/core/http'

export default class PedidosController {
  async index({request}: HttpContext) {
  
      const page = request.input('page', 1)
      const howMany = request.input('howMany', 5)
  
      return await Pedido.query().paginate(page, howMany)
    }
  
    async show({params}: HttpContext){
      return await Pedido.query()
      .where('id', params.id)
      .preload('cliente')
      .preload('produtos')
      .preload('entrega')
      .first()
    }
    
    async store({request}: HttpContext){
  
      const dados = request.only(['precoTotal', 'formaPagamento', 'dataPedido', 'clienteId', 'entregaId'])
  
      return await Pedido.create(dados)
    }
  
    async update({params, request}: HttpContext){
      const pedido = await Pedido.findOrFail(params.id)
      const dados = request.only(['precoTotal', 'formaPagamento', 'dataPedido', 'clienteId', 'entregaId'])
  
      pedido.merge(dados)
  
      return await pedido.save()
    }
  
    async destroy({params}: HttpContext){
      const pedido = await Pedido.findOrFail(params.id)
      
      await pedido.delete()
      return {msg: 'Registro deletedo com sucesso', pedido}
    }
}