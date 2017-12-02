'use strict'

const controller = require('../../database/controllers/skills')

/* Delete a skill in the database.

	PARAMS
		req (object): request object. Must contain certain properties (see database/controllers/skills.js)
		res (object): response object

	RETURN
		none
*/
const route = (req, res) => {
	let id = req.body.id

	// Delete the skill
	controller.deleteSkill(id, (err, skill) => {
		if (err) {
			let msg = {
				error: `error while attempting to delete skill ${id}`
			}

			return res.status(400).json(msg)
		}

		let msg = { }

		return res.status(200).json(msg)
	})
}

module.exports = route
