import Entrega from '#models/entrega'
import type { HttpContext } from '@adonisjs/core/http'

export default class EntregasController {
  async index({request}: HttpContext) {
  
      const page = request.input('page', 1)
      const howMany = request.input('howMany', 5)
  
      return await Entrega.query().paginate(page, howMany)
    }
  
    async show({params}: HttpContext){
      return await Entrega.query()
      .where('id', params.id)
      .preload('pedido')
      .first()
    }
    
    async store({request}: HttpContext){
  
      const dados = request.only(['empresaEntrega', 'codRastreio'])
  
      return await Entrega.create(dados)
    }
  
    async update({params, request}: HttpContext){
      const entrega = await Entrega.findOrFail(params.id)
      const dados = request.only(['empresaEntrega', 'codRastreio'])
  
      entrega.merge(dados)
  
      return await entrega.save()
    }
  
    async destroy({params}: HttpContext){
      const entrega = await Entrega.findOrFail(params.id)
      
      await entrega.delete()
      return {msg: 'Registro deletedo com sucesso', entrega}
    }
}