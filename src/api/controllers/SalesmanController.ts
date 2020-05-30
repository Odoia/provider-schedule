import { Response } from 'express'
import { JsonController, Post, Get, BodyParam, Res, Param } from 'routing-controllers'
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
    console.log('------>')
    console.log(result)
    return res.status(200).json(result)
  }

  @Get('/:id')
  async show(
    @Param('id') id: number,
    @Res() res: Response
  ) {
    const result = await this.service.findOne({ id })
    console.log('------>')
    console.log(result)
    return res.status(200).json(result)
  }

}
