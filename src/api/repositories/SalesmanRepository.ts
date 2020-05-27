import { EntityRepository, Repository } from 'typeorm'

import { Salesman } from '@/database/models'

@EntityRepository(Salesman)
export default class SalesmanRepository extends Repository<Salesman> {}
