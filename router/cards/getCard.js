'use strict';

const controller = require('../../database/controllers/cards');

/*  Get a card from the database.

    PARAMS
      req (object): request object. Must contain certain properties (see database/controllers/cards.js)
      res (object): response object

    RETURN
      none
*/
const route = (req, res) => {

  let id = req.params.id;

  // Get the card
  controller.getCard(id, (err, card) => {
    if (err) {
      let msg = {
        error: `error while attempting to get card ${id}`
      };

      return res.status(400).json(msg);
    }

    let msg = {
      card: card
    };

    return res.status(200).json(msg);
  });
};

module.exports = route;
