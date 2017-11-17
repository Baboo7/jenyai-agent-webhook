'use strict';

// Define a webhook interaction.
class Interaction {

  constructor(options) {
    this.sessionId = options.sessionId;
    this.contexts = Object.assign([ ], options.contexts);
    this.action = options.action;
    this.parameters = Object.assign({ }, options.parameters);
    this.messages = Object.assign([ ], options.messages);

    this.followupEvent = {
      data: { }
    };
  }

  /*  Return a parameter.

    PARAM
      key (string): name of the parameter

    RETURN
      (string | undefined) the parameter value if exists
  */
  getParameter(key) {

    return this.parameters[key];
  }

  /*  Conmpute the answer.

    PARAM
      none

    RETURN
      (object) contains the information to send back to the agent
  */
  get response() {

    let response = {
      contextOut: this.contexts,
      followupEvent: this.followupEvent,
      messages: this.messages
    };

    return response;
  }

  /*  Set the followup event.

    PARAM
      name (string): name of the event
      data (object): key-value representing the data held

    RETURN
      none
  */
  setFollowupEvent(name, data) {

    this.followupEvent.name = name;
    this.followupEvent.data = data;
  }

  /*  Add a TEXT message in message stack.

    PARAM
      text (string)

    RETURN
      none
  */
  addTextMessage(text) {

    let message = {
      type: 0,
      speech: text
    };

    this.messages.push(message);
  }
}

module.exports = Interaction;
