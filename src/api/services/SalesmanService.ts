import { Service } from 'typedi'
import { OrmRepository } from 'typeorm-typedi-extensions'

import { Salesman } from '@/database/models'

import { SalesmanRepository } from '~/repositories'

@Service()
export default class SalesmanService {
  constructor(@OrmRepository() private repository: SalesmanRepository) {}

  public async create(salesman: Salesman): Promise<Salesman | undefined> {
    return this.repository.save(salesman)
  }
}
