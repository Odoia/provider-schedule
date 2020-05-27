import { Response } from 'express'
import { JsonController, Post, BodyParam, Res } from 'routing-controllers'

import { Salesman } from '@/database/models'

@JsonController('/v1/salesmen')
export default class SalesmanController {
  @Post('/')
  async create(
    @BodyParam('salesman', { required: true }) salesman: Salesman,
    @Res() res: Response
  ) {
    return res.status(201).json(salesman)
  }
}
