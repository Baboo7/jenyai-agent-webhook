'use strict';

let Interaction = require('../../utils/interaction');
let expect = require('chai').expect;

describe('interaction class', () => {

  it('get parameter', () => {

    let options = {
      sessionId: 'abc5464s864e6846f84b34a',
      contexts: [ ],
      action: 'wikipedia',
      parameters: {
        person: 'steve jobs'
      },
      messages: [ ]
    };

    let expected = options.parameters.person;

    let interaction = new Interaction(options);

    expect(interaction.getParameter('person')).to.equal(expected);
  });

  it('get response', () => {

    let options = {
      sessionId: 'abc5464s864e6846f84b34a',
      contexts: [ ],
      action: 'wikipedia',
      parameters: {
        person: 'steve jobs'
      },
      messages: [ ]
    };

    let expected = {
      contextOut: [ ],
      followupEvent: {
        data: { }
      },
      messages: [ ]
    };

    let interaction = new Interaction(options);

    expect(interaction.response).to.deep.equal(expected);
  });

  it('set followupEvent w/out data', () => {

    let options = {
      sessionId: 'abc5464s864e6846f84b34a',
      contexts: [ ],
      action: 'wikipedia',
      parameters: {
        person: 'steve jobs'
      },
      messages: [ ]
    };

    let followupEvent = {
      name: 'fallback',
      data: { }
    };

    let expected = {
      contextOut: [ ],
      followupEvent: followupEvent,
      messages: [ ]
    };

    let interaction = new Interaction(options);

    interaction.setFollowupEvent(followupEvent.name);

    expect(interaction.response).to.deep.equal(expected);
  });

  it('add text message', () => {

    let options = {
      sessionId: 'abc5464s864e6846f84b34a',
      contexts: [ ],
      action: 'wikipedia',
      parameters: {
        person: 'steve jobs'
      },
      messages: [ ]
    };

    let message = {
      type: 0,
      speech: 'so cool to see you'
    };

    let expected = {
      contextOut: [ ],
      followupEvent: {
        data: { }
      },
      messages: [ message ]
    };

    let interaction = new Interaction(options);

    interaction.addTextMessage(message.speech);

    expect(interaction.response).to.deep.equal(expected);
  });

});
