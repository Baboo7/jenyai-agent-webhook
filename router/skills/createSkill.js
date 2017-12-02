'use strict'

const controller = require('../../database/controllers/skills')

/* Create a skill in the database.

	PARAMS
		req (object): request object. Must contain certain properties (see database/controllers/skills.js)
		res (object): response object

	RETURN
		none
*/
const route = (req, res) => {
	let data = {
		grade: req.body.grade,
		chapter: req.body.chapter,
		skill: req.body.skill,
		subskill: req.body.subskill,
		title: req.body.title
	}

	// Create a skill
	controller.createSkill(data, (err, skill) => {
		if (err) {
			let msg = {
				error: `error while attempting to create skill ${data}`
			}

			return res.status(400).json(msg)
		}

		let msg = {
			skill: skill
		}

		return res.status(200).json(msg)
	})
}

module.exports = route
