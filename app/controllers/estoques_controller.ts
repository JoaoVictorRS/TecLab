import Estoque from '#models/estoque'
import type { HttpContext } from '@adonisjs/core/http'

export default class EstoquesController {
  async index({request}: HttpContext) {
  
      const page = request.input('page', 1)
      const howMany = request.input('howMany', 5)
  
      return await Estoque.query().paginate(page, howMany)
    }
  
    async show({params}: HttpContext){
      return await Estoque.query()
      .where('id', params.id)
      .preload('produto')
      .first()
    }
    
    async store({request}: HttpContext){
  
      const dados = request.only(['quantidade', 'dataEntrega', 'dataSaida'])
  
      return await Estoque.create(dados)
    }
  
    async update({params, request}: HttpContext){
      const estoque = await Estoque.findOrFail(params.id)
      const dados = request.only(['quantidade', 'dataEntrega', 'dataSaida'])
  
      estoque.merge(dados)
  
      return await estoque.save()
    }
  
    async destroy({params}: HttpContext){
      const estoque = await Estoque.findOrFail(params.id)
      
      await estoque.delete()
      return {msg: 'Registro deletedo com sucesso', estoque}
    }
}