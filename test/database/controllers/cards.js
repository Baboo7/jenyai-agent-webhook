'use strict';

let controller = require('../../../database/controllers/cards');
let expect = require('chai').expect;

describe('cards controller', () => {

  it('create & get by id & delete a card', done => {

    let data = {
      src: 'http://ima.ge',
      skillId: -1
    };

    controller.createCard(data, (err, newItem) => {

      if (err) {
        expect(true).to.equal(false);
        done();
      } else {
        controller.getCardsBySkill(data.skillId, (err, gotItem) => {

          if (err) {
            expect(true).to.equal(false);
            done();
          } else {
            controller.deleteCard(newItem.dataValues.id, err => {

              if (err) {
                expect(true).to.equal(false);
                done();
              } else {
                expect(gotItem[0]).to.deep.equal(newItem.dataValues);
                done();
              }
            });
          }
        });
      }
    });
  });

});
