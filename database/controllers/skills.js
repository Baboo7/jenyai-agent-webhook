'use strict'

const controller = require('../models').skills

/*************************************
*
*	 Skill
* -----------------------------------
*	 REQUIRED PARAMETERS
*		 grade (string)
*		 chapter (string)
*		 skill (string)
*		 subskill (string)
*		 title (string)
*************************************/

/*	Creates a new skill.

		PARAMS
			data (object): parameters required (see above)
			callback (function): called once the skill is created and takes 2 arguments
				err (boolean): true if error encountered, false otherwise
				skill (object): freshly created skill, undefined if error

		RETURN
			none
*/
const createSkill = (data, callback) => {
	if (!callback) callback = () => { }

	// check all the required parameters are specified
	if (!data || typeof data.grade === 'undefined' || typeof data.chapter === 'undefined' || typeof data.skill === 'undefined' || typeof data.subskill === 'undefined' || typeof data.title === 'undefined') {
		console.error('missing information to create skill ', data)
		callback(true)
		return
	}

	controller
		.create({
			grade: data.grade,
			chapter: data.chapter,
			skill: data.skill,
			subskill: data.subskill,
			title: data.title
		})
		.then(skill => callback(undefined, skill))
		.catch(err => {
			console.error(err)
			callback(true)
		})
}

/*	Delete a skill.

		PARAMS
			id (string): id of the skill
			callback (function)
				err (boolean): true if error, undefined otherwise

		RETURN
			none
*/
const deleteSkill = (id, callback) => {
	if (!callback) callback = () => { }

	controller
		.destroy({
			where: { id: id }
		})
		.then(() => callback())
		.catch(err => {
			console.error(err)
			callback(true)
		})
}

/*	Update a skill.

		PARAMS
			data (object): contains information for update. Must contain property id (see above for further information)
			callback (function)
				err (boolean): true if error, undefined otherwise
				updated (array): number of updated rows

		RETURN
			none
*/
const updateSkill = (data, callback) => {
	if (!callback) callback = () => { }

	// check all the required parameters are specified
	if (!data.id) {
		console.error('missing information to update skill ', data)
		callback(true)
		return
	}

	controller
		.update({
			grade: data.grade,
			chapter: data.chapter,
			skill: data.skill,
			subskill: data.subskill,
			title: data.title
		}, {
			where: { id: data.id }
		})
		.then(updated => callback(undefined, updated))
		.catch(err => {
			console.error(err)
			callback(true)
		})
}

/*	Retrieve a skill.

		PARAMS
			id (integer): id of the skill
			callback (function)
				err (boolean): true if error, undefined otherwise
				situation (object): the skill, undefined if error

		RETURN
			none
*/
const getSkill = (id, callback) => {
	controller
		.findOne({
			where: { id: id }
		})
		.then(skill => callback(undefined, skill))
		.catch(err => {
			console.error(err)
			callback(true)
		})
}

/*	Retrieve a skill by acronym.

		PARAMS
			data (object)

		RETURN
			Promise
*/
const getSkillByAcronym = (data, callback) => {
	if (!callback) callback = () => { }
	if (!data.grade) data.grade = null
	if (!data.chapter) data.chapter = null
	if (!data.skill) data.skill = null
	if (!data.subskill) data.subskill = null

	return controller
		.findOne({
			where: {
				grade: data.grade,
				chapter: data.chapter,
				skill: data.skill,
				subskill: data.subskill
			}
		})
}

/*	Retrieve all skills.

		PARAMS
			callback (function)
				err (boolean): true if error, undefined otherwise
				list (object): all RAW skills, undefined if error

		RETURN
			none
*/
const getAllSkills = callback => {
	if (!callback) callback = () => { }

	controller
		.findAll({
			raw: true
		})
		.then(list => callback(undefined, list))
		.catch(err => {
			console.error(err)
			callback(true)
		})
}

/*	Retrieve skills by chapter.

		PARAMS
			data (object)
			callback (function)
				err (boolean): true if error, undefined otherwise
				list (object): all RAW skills, undefined if error

		RETURN
			none
*/
const getSkillsByChapter = (data, callback) => {
	if (!callback) callback = () => { }

	// check all the required parameters are specified
	if (!data || typeof data.grade === 'undefined' || typeof data.chapter === 'undefined') {
		console.error('missing information to get skills by chapter', data)
		callback(true)
		return
	}

	controller
		.findAll({
			where: {
				grade: data.grade,
				chapter: data.chapter
			},
			raw: true
		})
		.then(list => callback(undefined, list))
		.catch(err => {
			console.error(err)
			callback(true)
		})
}

module.exports = {
	createSkill: createSkill,
	deleteSkill: deleteSkill,
	updateSkill: updateSkill,
	getSkill: getSkill,
	getSkillByAcronym: getSkillByAcronym,
	getAllSkills: getAllSkills,
	getSkillsByChapter: getSkillsByChapter
}
