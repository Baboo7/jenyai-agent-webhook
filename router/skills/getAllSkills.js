'use strict'

const controller = require('../../database/controllers/skills')

/* Get all skills from the database.

	PARAMS
		req (object): request object. Must contain certain properties (see database/controllers/skills.js)
		res (object): response object

	RETURN
		none
*/
const route = (req, res) => {
	// Get all the skills
	controller.getAllSkills((err, skills) => {
		if (err) {
			let msg = {
				error: `error while attempting to get all skills`
			}

			return res.status(400).json(msg)
		}

		let msg = {
			skills: skills
		}

		return res.status(200).json(msg)
	})
}

module.exports = route
