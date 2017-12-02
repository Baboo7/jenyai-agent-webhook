'use strict'

// Define a webhook interaction.
class Interaction {
	constructor (options) {
		this.sessionId = options.sessionId
		this.contexts = Object.assign([ ], options.contexts)
		this.action = options.action
		this.parameters = Object.assign({ }, options.parameters)
		this.messages = Object.assign([ ], options.messages)

		this.followupEvent = {
			data: { }
		}
	}

	/*	Return a parameter.

		PARAM
			key (string): name of the parameter

		RETURN
			(string | undefined) the parameter value if exists
	*/
	getParameter (key) {
		return this.parameters[key]
	}

	/*	Conmpute the answer.

		PARAM
			none

		RETURN
			(object) contains the information to send back to the agent
	*/
	get response () {
		let response = {
			contextOut: this.contexts,
			followupEvent: this.followupEvent,
			messages: this.messages
		}

		return response
	}

	/*	Set the followup event.

		PARAM
			name (string): name of the event
			data (object): key-value representing the data held

		RETURN
			none
	*/
	setFollowupEvent (name, data) {
		if (!data) data = { }

		this.followupEvent.name = name
		this.followupEvent.data = data
	}

	/*	Create an text message.

		PARAM
			text (string)

		RETURN
			(object) text message
	*/
	createTextMessage (text) {
		if (!text) throw new Error('no text provided')

		let message = {
			type: 0,
			speech: text
		}

		return message
	}

	/*	Create an image message.

		PARAM
			src (string): url to the image

		RETURN
			(object) image message
	*/
	createImageMessage (src) {
		if (!src) throw new Error('no image source provided')

		let message = {
			type: 4,
			payload: {
				'type': 'image',
				'src': src
			}
		}

		return message
	}

	/*	Replace a placeholder by a specified message.

		PARAM
			placeholder (string): name of the placeholder
			message (object): message to replace the placeholder with

		RETURN
			(array of objects) new stack of messages
	*/
	replacePlaceholder (placeholder, message) {
		let phId = this.messages.findIndex(m => {
			if (m.type === 4 && m.payload && m.payload.placeholder) return m.payload.placeholder === placeholder
		})

		if (phId === -1) throw new Error(`no placeholder found for '${placeholder}'`)

		let messages = Object.assign([ ], this.messages)

		messages[phId] = message

		return messages
	}

	/*	Set the new message stack.

		PARAM
			messages (array of objects): new message stack

		RETURN
			none
	*/
	setMessages (messages) {
		this.messages = messages
	}
}

module.exports = Interaction
