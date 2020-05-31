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
          expect(result.body.deletedAt).toBe(null)
        })
      })

      describe('When need list all salesman -> GET', () => {
        it('should be list salesman`s and status 200', async () => {
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
          expect(result.body.length).toBeGreaterThan(0)
        })
      })

      describe('When need list one salesman by id -> GET /:id', () => {
        it('should be show salesman and status 200', async () => {
          const post_result = await request(app)
          .post('/api/v1/salesmen')
          .send({
            salesman: {
              name: 'salesman test',
              email: `${Date.now()}@mail.com`,
              phone: '123',
              whatsapp: true
            }
          })

          const result = await request(app)
          .get(`/api/v1/salesmen/${post_result.body.id}`)
          expect(result.status).toBe(200)
          expect(result.body.id).toBe(post_result.body.id)
        })
      })

      describe('When need update a salesman -> GET /:id', () => {})
    })

    describe('When use a invalid salesman', () => {})
  })
})
