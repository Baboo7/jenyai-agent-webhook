'use strict';

let controller = require('../../../database/controllers/skills');
let expect = require('chai').expect;

describe('rooms controller', () => {

  it('create & delete a skill', done => {

    let data = {
      grade: '6',
      chapter: 'R',
      skill: '1',
      subskill: null,
      title: 'Write a ratio'
    };

    controller.createSkill(data, (err, skill) => {

      if (err) {
        expect(true).to.equal(false);
        done();
      } else {
        controller.deleteSkill(skill.dataValues.id, err => {

          if (err) {
            expect(true).to.equal(false);
            done();
          } else {
            expect(true).to.equal(true);
            done();
          }
        });
      }
    });
  });

  it('create & get & delete a skill', done => {

    let data = {
      grade: '6',
      chapter: 'R',
      skill: '1',
      subskill: null,
      title: 'Write a ratio'
    };

    controller.createSkill(data, (err, newSkill) => {

      if (err) {
        expect(true).to.equal(false);
        done();
      } else {
        controller.getSkill(newSkill.dataValues.id, (err, gotSkill) => {

          if (err) {
            expect(true).to.equal(false);
            done();
          } else {
            controller.deleteSkill(gotSkill.dataValues.id, err => {

              if (err) {
                expect(true).to.equal(false);
                done();
              } else {
                expect(gotSkill.dataValues).to.deep.equal(newSkill.dataValues);
                done();
              }
            });
          }
        });
      }
    });
  });

  it('create & update & get & delete a skill', done => {

    let data = {
      grade: '6',
      chapter: 'R',
      skill: '1',
      subskill: null,
      title: 'Write a ratio'
    };

    controller.createSkill(data, (err, newSkill) => {

      if (err) {
        expect(true).to.equal(false);
        done();
      } else {

        let dataUpdate = {
          id: newSkill.dataValues.id,
          grade: '6',
          chapter: 'F',
          skill: '1',
          subskill: null,
          title: 'Write a ratio'
        };

        controller.updateSkill(dataUpdate, err => {

          if (err) {
            expect(true).to.equal(false);
            done();
          } else {
            controller.getSkill(newSkill.dataValues.id, (err, gotSkill) => {

              if (err) {
                expect(true).to.equal(false);
                done();
              } else {
                controller.deleteSkill(gotSkill.dataValues.id, err => {

                  if (err) {
                    expect(true).to.equal(false);
                    done();
                  } else {
                    expect(gotSkill.dataValues).to.include(dataUpdate);
                    done();
                  }
                });
              }
            });
          }
        });
      }
    });
  });

});
