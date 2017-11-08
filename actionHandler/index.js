'use strict';

const actions = require('./actions');

/*  Handle triggered actions.

  PARAM
    interaction (object): contains main information from the agent

  RETURN
    none
*/
const actionHandler = interaction => {

  let handler = actions[interaction.action];

  if (handler) {
    return handler(interaction);
  }

  throw `unhandled action '${interaction.action}'`;
};

module.exports = actionHandler;
