const mongoose = require("mongoose");
const request = require("supertest");
require("dotenv").config();

const app = require("../../app");
const { UserModel } = require("../../models/user");

const { DB_TEST_HOST, PORT } = process.env;

describe("test auth routes", () => {
  let server;
  beforeAll(() => server = app.listen(PORT));
  afterAll(() => server.close());

  beforeEach((done) => {
    mongoose.connect(DB_TEST_HOST).then(() => done())
  })

  afterEach((done) => {
    mongoose.connection.db.dropCollection(() => {
      mongoose.connection.close(() => done())
    })
  })

  test("test login route", async () => {
    const user = {
      email: "youremail@domain.com",
      password: "yourpass"
    };

    const userInstance = await UserModel.create(user);

    /*
    1. Перевірити правильність відповіді
    2. Перевірити, що в БД був записаний потрібний елемент
    */

    const loginUser = {
      email: "youremail@domain.com",
      password: "yourpass"
    };

    const accessToken = 'eyJsdflkjsdflkj'
    // Перевірка, що токен проходить перевірку через jsonwebtoken.verify(token)
    test('accessToken passes jsonwebtoken.verify(token)', () => {
      jsonwebtoken.verify()
    })

    const response = await request(app)
      .post("/api/auth/login")
      .send(loginUser);
    expect(response.statusCode).toBe(200);


  })
})