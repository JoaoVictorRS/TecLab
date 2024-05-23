import Produto from '#models/produto'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProdutosController {
  async index({request}: HttpContext) {
  
      const page = request.input('page', 1)
      const howMany = request.input('howMany', 5)
  
      return await Produto.query().paginate(page, howMany)
    }
  
    async show({params}: HttpContext){
      return await Produto.query()
      .where('id', params.id)
      .preload('categoria')
      .preload('estoque')
      //.preload('pedidos')
      .first()
    }
    
    async store({request}: HttpContext){
  
      const dados = request.only(['nomeProduto', 'preco', 'descricao', 'categoriaId', 'estoqueId'])
  
      return await Produto.create(dados)
    }
  
    async update({params, request}: HttpContext){
      const produto = await Produto.findOrFail(params.id)
      const dados = request.only(['nomeProduto', 'preco', 'descricao', 'categoriaId', 'estoqueId'])
  
      produto.merge(dados)
  
      return await produto.save()
    }
  
    async destroy({params}: HttpContext){
      const produto = await Produto.findOrFail(params.id)
      
      await produto.delete()
      return {msg: 'Registro deletedo com sucesso', produto}
    }
}