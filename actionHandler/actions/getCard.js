'use strict'

const skillsCtrl = require('../../database/controllers/skills')
const cardsCtrl = require('../../database/controllers/cards')

/* Get a card for a specified skill.

	PARAM
		interaction (object): see Interaction class
			parameters (object): must contain the properties
				skill (string): the skill to retrieve a card from. Must follow the format 'grade.chapter.skill.subskill'

	RETURN
		Promise
*/
const handler = interaction => {
	return new Promise((resolve, reject) => {
		// check for parameters
		let paramSkill = interaction.getParameter('skill')

		if (!paramSkill) {
			interaction.setFollowupEvent('fallback')
			reject(new Error(`missing parameters to perform action '${interaction.action}'`))
			return
		}

		// retrieve data from database
		let [ gradeAcronym, chapterAcronym, skillAcronym, subskillAcronym ] = paramSkill.split('.')

		let acronym = {
			grade: gradeAcronym,
			chapter: chapterAcronym,
			skill: skillAcronym,
			subskill: subskillAcronym
		}

		// get skill by acronym from database
		skillsCtrl.getSkillByAcronym(acronym)
			.then(skill => {
				if (skill === null) {
					interaction.setMessages(interaction.replacePlaceholder('card', interaction.createTextMessage("Oooops! I couldn't find it x) Sorry for that!")))
					reject(new Error(`no skill in database with acronym '${paramSkill}'`))
				} else {
				// get card by skill
					cardsCtrl.getCardsBySkill([ skill.dataValues.id ])
						.then(cardsList => {
							if (cardsList.length === 0) {
								interaction.setMessages(interaction.replacePlaceholder('card', interaction.createTextMessage("Oooops! I couldn't find it x) Sorry for that!")))
								reject(new Error(`no card in database for skill '${paramSkill}'`))
							} else {
								interaction.setMessages(interaction.replacePlaceholder('card', interaction.createImageMessage(cardsList[0].src)))
								resolve()
							}
						})
						.catch(e => {
							reject(e)
						})
				}
			})
			.catch(e => {
				reject(e)
			})
	})
}

module.exports = handler
