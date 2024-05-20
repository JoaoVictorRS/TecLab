import Categoria from '#models/categoria'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoriasController {
  async index({request}: HttpContext) {
  
      const page = request.input('page', 1)
      const howMany = request.input('howMany', 5)
  
      return await Categoria.query().paginate(page, howMany)
    }
  
    async show({params}: HttpContext){
      return await Categoria.findOrFail(params.id)
    }
    
    async store({request}: HttpContext){
  
      const dados = request.only(['nomeCategoria'])
  
      return await Categoria.create(dados)
    }
  
    async update({params, request}: HttpContext){
      const categoria = await Categoria.findOrFail(params.id)
      const dados = request.only(['nomeCategoria'])
  
      categoria.merge(dados)
  
      return await categoria.save()
    }
  
    async destroy({params}: HttpContext){
      const categoria = await Categoria.findOrFail(params.id)
      
      await categoria.delete()
      return {msg: 'Registro deletedo com sucesso', categoria}
    }
}