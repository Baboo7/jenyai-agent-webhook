'use strict';

const controller = require('../../database/controllers/cards');

/*  Update a card in the database.

    PARAMS
      req (object): request object. Must contain certain properties (see database/controllers/cards.js)
      res (object): response object

    RETURN
      none
*/
const route = (req, res) => {

  let data = {
    id: req.body.id,
    src: req.body.src,
    skillId: req.body.skillId,
  };

  // Update a card
  controller.updateCard(data, (err, updated) => {
    if (err) {
      let msg = {
        error: 'error while attempting to update card'
      };

      return res.status(400).json(msg);
    }

    if (updated[0] === 0) {
      let msg = {
        error: `card ${data.id} does not exist`
      };

      return res.status(400).json(msg);
    }

    let msg = { };

    return res.status(200).json(msg);
  });
};

module.exports = route;
