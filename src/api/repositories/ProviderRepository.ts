import { EntityRepository, Repository } from 'typeorm'

import { Provider } from '@/database/models'

@EntityRepository(Provider)
export default class ProviderRepository extends Repository<Provider> {}
