'use strict'

const controller = require('../../database/controllers/skills')

/* Update a skill in the database.

	PARAMS
		req (object): request object. Must contain certain properties (see database/controllers/skills.js)
		res (object): response object

	RETURN
		none
*/
const route = (req, res) => {
	let data = {
		id: req.body.id,
		grade: req.body.grade,
		chapter: req.body.chapter,
		skill: req.body.skill,
		subskill: req.body.subskill,
		title: req.body.title
	}

	// Update a skill
	controller.updateSkill(data, (err, updated) => {
		if (err) {
			let msg = {
				error: 'error while attempting to update skill'
			}

			return res.status(400).json(msg)
		}

		if (updated[0] === 0) {
			let msg = {
				error: `skill ${data.id} does not exist`
			}

			return res.status(400).json(msg)
		}

		let msg = { }

		return res.status(200).json(msg)
	})
}

module.exports = route
