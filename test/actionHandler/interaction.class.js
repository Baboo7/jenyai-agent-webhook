'use strict';

let Interaction = require('../../actionHandler/interaction.class');
let expect = require('chai').expect;

describe('interaction class', () => {

  // parameters
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

  // response
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

  // followupEvent
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

  // messages
  describe('> create text message', () => {

    it('> should detect a missing param', () => {

      let text;

      let expected = true;

      let interaction = new Interaction({ });

      try {
        interaction.createTextMessage(text);
        expect(false).to.equal(expected);
      } catch (e) {
        expect(true).to.equal(expected);
      }

    });

    it('> should create a text message', () => {

      let text = 'some text';

      let expected = {
        type: 0,
        speech: text
      };

      let interaction = new Interaction({ });

      try {
        let message = interaction.createTextMessage(text);
        expect(message).to.deep.equal(expected);
      } catch (e) {
        expect({ }).to.deep.equal(expected);
      }

    });

  });

  describe('> create image message', () => {

    it('> should detect a missing param', () => {

      let src;

      let expected = true;

      let interaction = new Interaction({ });

      try {
        interaction.createImageMessage(src);
        expect(false).to.equal(expected);
      } catch (e) {
        expect(true).to.equal(expected);
      }

    });

    it('> should create an image message', () => {

      let src = 'https://card.png';

      let expected = {
        type: 4,
        payload: {
          "type": "image",
          "src": src
        }
      };

      let interaction = new Interaction({ });

      try {
        let message = interaction.createImageMessage(src);
        expect(message).to.deep.equal(expected);
      } catch (e) {
        expect({ }).to.deep.equal(expected);
      }

    });

  });

  describe('> replace a placeholder', () => {

    it('> should detect a missing placeholder in message stack', () => {

      let options = {
        sessionId: 'abc5464s864e6846f84b34a',
        contexts: [ ],
        action: 'wikipedia',
        parameters: {
          person: 'steve jobs'
        },
        messages: [ ]
      };

      let src = 'https://card.png';

      let expected = true;

      let interaction = new Interaction(options);

      try {
        interaction.replacePlaceholder('card', interaction.createImageMessage(src));
        expect(false).to.equal(expected);
      } catch (e) {
        expect(true).to.equal(expected);
      }

    });

    it('> should replace card placeholder w/ other message', () => {

      let options = {
        messages: [
          {
            type: 4,
            payload: {
              placeholder: 'text'
            }
          }
        ]
      };

      let text = 'some text';

      let expected = [
        {
          type: 0,
          speech: text
        }
      ];

      let interaction = new Interaction(options);

      try {
        expect(interaction.replacePlaceholder('text', interaction.createTextMessage(text))).to.deep.equal(expected);
      } catch (e) {
        expect([ ]).to.deep.equal(expected);
      }

    });

  });

});
