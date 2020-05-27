import { Application } from 'express'
// import faker from 'faker'
// import { OK, NOT_FOUND, CREATED, BAD_REQUEST, NO_CONTENT } from 'http-status-codes'
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
          await request(app).post('/api/v1/salesmen')
          .send({ 
            name: 'salesman first',
            email: `${Date.now()}@mail.com`,
            phone: '123',
            whatsapp: true
          })
          .then((result) => {
            expect(result.status).toBe(201)
            expect(result.body.name).toBe('salesman first')
          })
        })
      })

      describe('When need list all salesman -> GET', () => {
        // it('should be list two salesman`s and status 200', async () => {
        //   await request(app).post('/api/v1/salesman')
        //   .send({ 
        //     name: 'user account',
        //     email: `${Date.now()}@mail.com`,
        //     phone: '123',
        //     whatsapp: true
        //   })
        //   .then((result) => {
        //     expect(result.status).toBe(201)
        //   })
        //   await request(app).get('/api/v1/salesmen').expect(200)
        // })
      })

      describe('When need list one salesman by id -> GET /:id', () => {

      })


      describe('When need update a salesman -> GET /:id', () => {

      })


    })

    describe('When use a invalid salesman', () => {


    })
  })
})
