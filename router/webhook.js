'use strict';

const actionHandler = require('../actionHandler');
const Interaction = require('../utils/interaction');

/*  Handle requests from agent.

  PARAM
    req (object)
    res (object)

  RETURN
    none
*/
const webhook = (req, res) => {

  let interaction = new Interaction(req.body);

  try {
    actionHandler(interaction)
    .then(() => {
      res.json(interaction.response);
    })
    .catch(e => {
      console.log(e);
      res.json(interaction.response);
    });
  } catch(e) {
    console.log(e);
    res.json(interaction.response);
  }
};

module.exports = webhook;
