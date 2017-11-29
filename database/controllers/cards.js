'use strict';

const Op = require('sequelize').Op;
const controller = require('../models').cards;

/*************************************
*
*   Card
* -----------------------------------
*   REQUIRED PARAMETERS
*     src (string)
*     skillId (number): forreign key (skill id)
*************************************/

/*  Creates a new Card.

    PARAMS
      data (object): parameters required (see above)
      callback (function): called once the card is created and takes 2 arguments
        err (boolean): true if error encountered, false otherwise
        card (object): freshly created card, undefined if error

    RETURN
      none
*/
const createCard = (data, callback) => {

  if (!callback) callback = () => { };

  // check all the required parameters are specified
  if (!data
    || typeof data.src === 'undefined'
    || typeof data.skillId === 'undefined') {
      console.error('missing information to create card ', data);
      callback(true);
      return;
    }

  controller
  .create({
    src: data.src,
    skillId: data.skillId,
  })
  .then(card => callback(undefined, card))
  .catch(err => {
    console.error(err);
    callback(true);
  });
};

/*  Delete a card.

    PARAMS
      id (string): id of the card
      callback (function)
        err (boolean): true if error, undefined otherwise

    RETURN
      none
*/
const deleteCard = (id, callback) => {

  if (!callback) callback = () => { };

  controller
  .destroy({
    where: { id: id }
  })
  .then(() => callback())
  .catch(err => {
    console.error(err);
    callback(true);
  });
};

/*  Update a card.

    PARAMS
      data (object): contains information for update. Must contain property id (see above for further information)
      callback (function)
        err (boolean): true if error, undefined otherwise
        updated (array): number of updated rows

    RETURN
      none
*/
const updateCard = (data, callback) => {

  if (!callback) callback = () => { };

  // check all the required parameters are specified
  if (!data.id) {
    console.error('missing information to update card ', data);
    callback(true);
    return;
  }

  controller
  .update({
    src: data.src,
    skillId: data.skillId,
  }, {
    where: { id: data.id }
  })
  .then(updated => callback(undefined, updated))
  .catch(err => {
    console.error(err);
    callback(true);
  });
};

/*  Retrieve a card.

    PARAMS
      id (integer): id of the card
      callback (function)
        err (boolean): true if error, undefined otherwise
        card (object): the card, undefined if error

    RETURN
      none
*/
const getCard = (id, callback) => {

  controller
  .findOne({
    where: { id: id }
  })
  .then(card => callback(undefined, card))
  .catch(err => {
    console.error(err);
    callback(true);
  });
};

/*  Retrieve all cards.

    PARAMS
      callback (function)
        err (boolean): true if error, undefined otherwise
        list (object): all RAW cards, undefined if error

    RETURN
      none
*/
const getAllCards = callback => {

  if (!callback) callback = () => { };

  controller
  .findAll({
    raw: true
  })
  .then(list => callback(undefined, list))
  .catch(err => {
    console.error(err);
    callback(true);
  });
};

/*  Retrieve cards by skill id.

    PARAMS
      skillsId (array of numbers): id of the skills the card should be associated with

    RETURN
      Promise
*/
const getCardsBySkill = skillsId => {

  return controller
  .findAll({
    where: {
      skillId: {
        [Op.or]: skillsId
      }
    },
    raw: true
  });
};

module.exports = {
  createCard: createCard,
  deleteCard: deleteCard,
  updateCard: updateCard,
  getCard: getCard,
  getAllCards: getAllCards,
  getCardsBySkill: getCardsBySkill,
};
