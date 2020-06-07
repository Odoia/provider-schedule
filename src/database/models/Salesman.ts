import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'

import { Provider } from '@/database/models'
import BaseEntity from '@/database/models/BaseEntity'

@Entity({ name: 'salesmen' })
export default class Salesman extends BaseEntity<Salesman> {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  phone: string

  @Column()
  whatsapp: boolean

  @ManyToOne(
    () => Provider,
    (provider) => provider.salesman
  )
  @JoinColumn({ name: 'provider_id' })
  provider?: Provider
}
