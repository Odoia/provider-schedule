import { Service } from 'typedi'
import { FindManyOptions, FindConditions } from 'typeorm'
import { OrmRepository } from 'typeorm-typedi-extensions'

import { Salesman } from '@/database/models'

import { SalesmanRepository } from '~/repositories'

@Service()
export default class SalesmanService {
  constructor(@OrmRepository() private repository: SalesmanRepository) {}

  public async create(salesman: Salesman): Promise<Salesman | undefined> {
    return this.repository.save(salesman)
  }
  
  public async find(options?: FindManyOptions<Salesman>): Promise<Salesman[]> {
    return this.repository.find(options)
  }

  public async findOne(options?: FindConditions<Salesman>): Promise<Salesman | undefined> {
    return this.repository.findOne(options)
  }
}
