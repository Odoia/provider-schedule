import { Response } from 'express'
import { JsonController, Delete, Put, Post, Get, BodyParam, Res, Param } from 'routing-controllers'
import { Container } from 'typedi'

import { Provider } from '@/database/models'

import { ProviderService } from '~/services'

@JsonController('/v1/providers')
export default class ProviderController {
  constructor(private service: ProviderService) {
    this.service = Container.get(ProviderService)
  }

  @Post('/')
  async create(
    @BodyParam('provider', { required: true }) provider: Provider,
    @Res() res: Response
  ) {
    const result = await this.service.create(provider)

    if (result) return res.status(201).json(provider)
  }

  @Get('/')
  async index(
    @Res() res: Response
  ) {
    const result = await this.service.find()
    return res.status(200).json(result)
  }

  @Get('/:id')
  async show(
    @Param('id') id: number,
    @Res() res: Response
  ) {
    const result = await this.service.findOne({ id })
    if(!result){
      return res.status(200).json('')  
    }

    return res.status(200).json(result)
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @BodyParam('provider') provider: Provider,
    @Res() res: Response
  ) {
    const findSalesman = await this.service.findOne({ id })
    if(!findSalesman){
      return res.status(404)
    }

    const result = await this.service.update({ id }, provider)
    return res.status(200).json(result)
  }

  @Delete('/:id')
  async delete(
    @Param('id') id: number,
    @Res() res: Response
  ) {
    const result = await this.service.delete(id)
    if(!result){
      return res.status(404)
    }
    return res.status(200).json(result)
  }

}
