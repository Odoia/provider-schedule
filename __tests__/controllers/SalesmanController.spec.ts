import { Application } from 'express'
import request from 'supertest'
import { Connection } from 'typeorm'

import ExpressLoader from '@/loaders/ExpressLoader'
import TypeormLoader from '@/loaders/TypeormLoader'

describe('/api/v1/salesman', () => {
  let app: Application
  let connection: Connection

  beforeAll(async () => {
    app = ExpressLoader()
    connection = await TypeormLoader()
  })

  afterAll(async () => {
    await connection.close()
  })

  describe('When use a salesman', () => {
    describe('When use a valid salesman', () => {
      describe('When need create a new salesman -> POST', () => {
        it('should be create one salesman and status 201', async () => {
          const result = await request(app)
            .post('/api/v1/salesmen')
            .send({
              salesman: {
                name: 'salesman first',
                email: `${Date.now()}@mail.com`,
                phone: '123',
                whatsapp: true
              }
            })

          expect(result.status).toBe(201)
          expect(result.body.name).toBe('salesman first')
          expect(result.body.id).not.toBe(null)
        })
      })

      describe('When need list all salesman -> GET', () => {
        it('should be list two salesman`s and status 200', async () => {
          await request(app)
            .post('/api/v1/salesmen')
            .send({
              salesman: {
                name: 'salesman first',
                email: `${Date.now()}@mail.com`,
                phone: '123',
                whatsapp: true
              }
            })

          const result = await request(app)
            .get('/api/v1/salesmen')
          expect(result.status).toBe(200)
          // expect(result.body.name).toBe('salesman first')
        })
      })

      describe('When need list one salesman by id -> GET /:id', () => {})

      describe('When need update a salesman -> GET /:id', () => {})
    })

    describe('When use a invalid salesman', () => {})
  })
})
