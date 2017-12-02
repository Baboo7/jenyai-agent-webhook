'use strict'

const actionHandler = require('../actionHandler')
const Interaction = require('../actionHandler/interaction.class')

/* Handle requests from agent.

	PARAM
		req (object)
		res (object)

	RETURN
		none
*/
const webhook = (req, res) => {
	let options = {
		sessionId: req.body.sessionId,
		contexts: req.body.result.contexts,
		action: req.body.result.action,
		parameters: req.body.result.parameters,
		messages: req.body.result.fulfillment.messages
	}

	let interaction = new Interaction(options)

	try {
		actionHandler(interaction)
			.then(() => {
				res.json(interaction.response)
			})
			.catch(e => {
				console.log(e)
				res.json(interaction.response)
			})
	} catch (e) {
		console.log(e)
		res.json(interaction.response)
	}
}

module.exports = webhook
