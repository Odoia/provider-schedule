import { Response } from 'express'
import { JsonController, Delete, Put, Post, Get, BodyParam, Res, Param } from 'routing-controllers'
import { Container } from 'typedi'

import { Salesman } from '@/database/models'

import { SalesmanService } from '~/services'

@JsonController('/v1/salesmen')
export default class SalesmanController {
  constructor(private service: SalesmanService) {
    this.service = Container.get(SalesmanService)
  }

  @Post('/')
  async create(
    @BodyParam('salesman', { required: true }) salesman: Salesman,
    @Res() res: Response
  ) {
    const result = await this.service.create(salesman)

    if (result) return res.status(201).json(salesman)
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
    @BodyParam('salesman') salesman: Salesman,
    @Res() res: Response
  ) {
    const findSalesman = await this.service.findOne({ id })
    if(!findSalesman){
      return res.status(404)
    }

    const result = await this.service.update({ id }, salesman)
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
