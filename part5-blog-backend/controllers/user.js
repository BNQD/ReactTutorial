const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const config = require('../utils/config')


usersRouter.get('/', async (request, response) => {
	const users = await User.find({})
	response.status(200).json(users)
})

usersRouter.post('/', async (request, response) => {
	const body = request.body
  const saltRounds = 10

	const passwordHash = await bcrypt.hash(body.password, saltRounds)

	const user = new User({
		username: body.username,
		name: body.name,
		passwordHash,
	})

	const savedUser = await user.save()

	response.json(savedUser)

})

usersRouter.post('/login/', async (request, response) => {
	const body = request.body
	const user = await User.findOne({ username: body.username})
	
	const passwordCorrect = user === null
		? false
		: await bcrypt.compare(body.password, user.passwordHash)
	if (!(user && passwordCorrect)) {
		return response.status(401).json({
			error: 'invalid username or password'
		})
	}
	
	const userForToken = {
		username: user.username,
		id: user._id,
	}
	
	const token = jwt.sign(userForToken, config.SECRET)
	
	response	
		.status(200)
		.send ({ token, username: user.username, name: user.name, userID: user.id})
})

module.exports = usersRouter