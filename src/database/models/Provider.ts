import { Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm'

import { Salesman } from '@/database/models'
import BaseEntity from '@/database/models/BaseEntity'

@Entity({ name: 'provider' })
export default class Provider extends BaseEntity<Provider> {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  fantasy_name: string

  @Column()
  social_reason: string

  @Column()
  cnpj: string
  
  @Column()
  status: boolean

  @OneToMany(
    () => Salesman,
    (salesman) => salesman.provider
  )
  salesmen?: Salesman[]
}
