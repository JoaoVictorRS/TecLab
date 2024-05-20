import Endereco from '#models/endereco'
import type { HttpContext } from '@adonisjs/core/http'

export default class EnderecosController {
  async index({request}: HttpContext) {
  
      const page = request.input('page', 1)
      const howMany = request.input('howMany', 5)
  
      return await Endereco.query().paginate(page, howMany)
    }
  
    async show({params}: HttpContext){
      return await Endereco.findOrFail(params.id)
    }
    
    async store({request}: HttpContext){
  
      const dados = request.only(['endereco'])
  
      return await Endereco.create(dados)
    }
  
    async update({params, request}: HttpContext){
      const endereco = await Endereco.findOrFail(params.id)
      const dados = request.only(['endereco'])
  
      endereco.merge(dados)
  
      return await endereco.save()
    }
  
    async destroy({params}: HttpContext){
      const endereco = await Endereco.findOrFail(params.id)
      
      await endereco.delete()
      return {msg: 'Registro deletedo com sucesso', endereco}
    }
}