'use strict';

let handler = require('../../../actionHandler/actions/getCard');
let Interaction = require('../../../actionHandler/interaction.class');
let expect = require('chai').expect;

describe('getCard handler', () => {

  it('> get a card for a specific skill', done => {

    let interaction = new Interaction({
      action: 'getCard',
      parameters: {
        skill: '6.R.1'
      },
			messages: [
				{
					type: 4,
					payload: {
						placeholder: 'card'
					}
				}
			]
    });

		try {
	    handler(interaction)
	    .then(() => {
	      expect(true).to.equal(true);
	      done();
	  	})
	    .catch(e => {
	      console.log(e);
	      expect(true).to.equal(false);
	      done();
	    });
		} catch (e) {
			console.log(e);
			expect(true).to.equal(false);
			done();
		}
  });

});
