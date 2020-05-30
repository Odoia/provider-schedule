import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
}
