'use strict';

const actionHandler = require('../actionHandler');

/*  Handle requests from agent.

  PARAM
    res (object)
    interaction (object): contains main information from the agent

  RETURN
    none
*/
const sendResponse = (res, interaction) => {
  res.json({
    contextOut: interaction.contexts,
    followupEvent: interaction.followupEvent
  });
}

/*  Handle requests from agent.

  PARAM
    req (object)
    res (object)

  RETURN
    none
*/
const webhook = (req, res) => {

  let interaction = {
    sessionId: req.body.sessionId,
    contexts: req.body.result.contexts,
    action: req.body.result.action,
    parameters: req.body.result.parameters,
    followupEvent: {
      data: { }
    }
  };

  // #####
  console.log(interaction);

  try {
    actionHandler(interaction)
    .then(() => {
      sendResponse(res, interaction);
    })
    .catch(e => {
      console.log(e);
      sendResponse(res, interaction);
    });
  } catch(e) {
    console.log(e);
    sendResponse(res, interaction);
  }
};

module.exports = webhook;
