import Cartao from '#models/cartao'
import type { HttpContext } from '@adonisjs/core/http'

export default class CartaosController {
  async index({ request }: HttpContext) {

    const page = request.input('page', 1)
    const howMany = request.input('howMany', 5)

    return await Cartao.query().paginate(page, howMany)
  }

  async show({ params }: HttpContext) {
    return await Cartao.query()
      .where('id', params.id)
      .preload('cliente')
      .first()
  }

  async store({ request }: HttpContext) {

    const dados = request.only(['numeroCartao', 'nomeTitular', 'dataValidade', 'tipoCartao'])

    return await Cartao.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const cartao = await Cartao.findOrFail(params.id)
    const dados = request.only(['numeroCartao', 'nomeTitular', 'dataValidade', 'tipoCartao'])

    cartao.merge(dados)

    return await cartao.save()
  }

  async destroy({ params }: HttpContext) {
    const cartao = await Cartao.findOrFail(params.id)

    await cartao.delete()
    return { msg: 'Registro deletedo com sucesso', cartao }
  }
}