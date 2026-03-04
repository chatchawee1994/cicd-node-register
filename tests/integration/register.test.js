import request from 'supertest'
import app from '../../src/app.js'
import * as userStore from '../../src/data/user.store.js'

beforeEach(() => {
    userStore.clear()
})

test("POST /register sucess", async () => {
    const res = await request(app)
        .post('/register')
        .send({ 
            email: "test@email.com", 
            password: "password" 
        })
    expect(res.status).toBe(201)
    expect(res.body.email).toBe("test@email.com")
})

test("POST /register invalid email", async () => {
    const res = await request(app)
        .post('/register')
        .send({ 
            email: "bad-email", 
            password: "password" 
        })
    expect(res.status).toBe(400)
    // expect(res.body.error).toBe("Invalid email format")
})



