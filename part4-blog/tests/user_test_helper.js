
const User = require('../models/user')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const initial_users = [
	{
		"username":"Test",
		"name":"Test",
		"password":"Test"
	}
]


module.exports = {
	initial_users
}