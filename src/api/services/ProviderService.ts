import { Service } from 'typedi'
import { FindManyOptions, FindConditions, DeleteResult } from 'typeorm'
import { OrmRepository } from 'typeorm-typedi-extensions'

import { Provider } from '@/database/models'

import { ProviderRepository } from '~/repositories'

@Service()
export default class ProviderService {
  constructor(@OrmRepository() private repository: ProviderRepository) {}

  public async create(provider: Provider): Promise<Provider | undefined> {
    return this.repository.save(provider)
  }
  
  public async find(options?: FindManyOptions<Provider>): Promise<Provider[]> {
    return this.repository.find(options)
  }

  public async findOne(options?: FindConditions<Provider>): Promise<Provider | undefined> {
    return this.repository.findOne(options)
  }

  public async update(criteria: FindConditions<Provider>, provider: Provider) { 
    return this.repository.update(criteria, provider)
  }

  public async delete(id: number): Promise<DeleteResult | undefined> {
    return this.repository.softDelete(id)
  }
}
